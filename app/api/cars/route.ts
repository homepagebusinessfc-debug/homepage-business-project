import { NextResponse } from 'next/server';
import { getAllCars } from '@/lib/cars';

export async function GET() {
  try {
    const cars = getAllCars();
    return NextResponse.json(cars);
  } catch (error) {
    console.error('車両データの取得エラー:', error);
    return NextResponse.json(
      { error: '車両データの取得に失敗しました' },
      { status: 500 }
    );
  }
}