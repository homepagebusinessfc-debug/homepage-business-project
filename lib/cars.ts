import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 車両データの型定義
export interface Car {
  id: number;
  name: string;
  image: string;
  type: 'new' | 'used';
  year: string;
  mileage: string;
  repairHistory: string;
  transmission: string;
  drive: string;
  displacement: string;
  color: string;
  warranty: string;
  totalPrice: number;
  vehiclePrice: number;
  fees: number;
  category: string;
  maker?: string;
  body?: string;
  published?: boolean;
  updatedAt?: string;
  slug: string;
}

const carsDirectory = path.join(process.cwd(), 'content/cars');

// content/carsディレクトリが存在するか確認し、なければ作成
function ensureCarsDirectory() {
  if (!fs.existsSync(carsDirectory)) {
    fs.mkdirSync(carsDirectory, { recursive: true });
  }
}

// すべての車両データを取得
export function getAllCars(): Car[] {
  ensureCarsDirectory();

  // ディレクトリ内のファイルを確認
  if (!fs.existsSync(carsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(carsDirectory);
  
  // .mdファイルのみを対象
  const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'));

  if (markdownFiles.length === 0) {
    return [];
  }

  const allCarsData = markdownFiles.map(fileName => {
    // ファイル名からslugを取得（.mdを除く）
    const slug = fileName.replace(/\.md$/, '');

    // ファイルの内容を読み込む
    const fullPath = path.join(carsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matterでfront matterをパース
    const { data } = matter(fileContents);

    // データを返す
    return {
      slug,
      id: data.id || 0,
      name: data.name || '',
      image: data.image || '/placeholder-car.jpg',
      type: data.type || 'used',
      year: data.year || '',
      mileage: data.mileage || '',
      repairHistory: data.repairHistory || '修復歴なし',
      transmission: data.transmission || 'AT',
      drive: data.drive || '2WD',
      displacement: data.displacement || '',
      color: data.color || '',
      warranty: data.warranty || '保証付き',
      totalPrice: data.totalPrice || 0,
      vehiclePrice: data.vehiclePrice || 0,
      fees: data.fees || 0,
      category: data.category || 'kei',
      maker: data.maker,
      body: data.body,
      published: data.published !== false, // デフォルトはtrue
      updatedAt: data.updatedAt,
    } as Car;
  });

  // 公開状態の車両のみをフィルタリングし、IDでソート
  return allCarsData
    .filter(car => car.published)
    .sort((a, b) => a.id - b.id);
}

// IDで特定の車両を取得
export function getCarById(id: number): Car | undefined {
  const allCars = getAllCars();
  return allCars.find(car => car.id === id);
}

// スラッグで特定の車両を取得
export function getCarBySlug(slug: string): Car | undefined {
  ensureCarsDirectory();

  try {
    const fullPath = path.join(carsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      id: data.id || 0,
      name: data.name || '',
      image: data.image || '/placeholder-car.jpg',
      type: data.type || 'used',
      year: data.year || '',
      mileage: data.mileage || '',
      repairHistory: data.repairHistory || '修復歴なし',
      transmission: data.transmission || 'AT',
      drive: data.drive || '2WD',
      displacement: data.displacement || '',
      color: data.color || '',
      warranty: data.warranty || '保証付き',
      totalPrice: data.totalPrice || 0,
      vehiclePrice: data.vehiclePrice || 0,
      fees: data.fees || 0,
      category: data.category || 'kei',
      maker: data.maker,
      body: data.body,
      published: data.published !== false,
      updatedAt: data.updatedAt,
    } as Car;
  } catch (error) {
    return undefined;
  }
}

// カテゴリーで車両を絞り込む
export function getCarsByCategory(category: string): Car[] {
  const allCars = getAllCars();
  
  if (category === 'all') {
    return allCars;
  }
  
  return allCars.filter(car => car.category === category);
}