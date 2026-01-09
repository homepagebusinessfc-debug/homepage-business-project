const fs = require('fs');
const path = require('path');

// 色の変換マッピング
const COLOR_MAP = {
  'text-red-600': 'text-kacchau',
  'text-red-700': 'text-kacchau-dark',
  'text-red-500': 'text-kacchau-500',
  'text-red-400': 'text-kacchau-400',
  'bg-red-600 text-white': 'bg-kacchau text-gray-900',
  'bg-red-600': 'bg-kacchau',
  'bg-red-700': 'bg-kacchau-dark',
  'bg-red-500': 'bg-kacchau-500',
  'bg-red-50': 'bg-kacchau-50',
  'bg-red-100': 'bg-kacchau-100',
  'border-red-600': 'border-kacchau',
  'border-red-500': 'border-kacchau-500',
  'border-red-200': 'border-kacchau-200',
  'border-red-100': 'border-kacchau-100',
  'hover:bg-red-700': 'hover:bg-kacchau-dark',
  'hover:bg-red-600': 'hover:bg-kacchau',
  'hover:text-red-600': 'hover:text-kacchau',
  'hover:border-red-600': 'hover:border-kacchau',
  'from-red-500': 'from-kacchau-500',
  'from-red-50': 'from-kacchau-50',
  'to-red-600': 'to-kacchau',
  'to-red-100': 'to-kacchau-100',
  '#dc2626': '#FFC107',
  '#ef4444': '#FFC107',
  '#b91c1c': '#FFB300',
};

function convertColors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    Object.entries(COLOR_MAP).forEach(([oldColor, newColor]) => {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      if (content.includes(oldColor)) {
        content = content.replace(regex, newColor);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Converted: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir, stats = { converted: 0, total: 0 }) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return stats;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(file)) {
        processDirectory(filePath, stats);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      stats.total++;
      if (convertColors(filePath)) {
        stats.converted++;
      }
    }
  });
  
  return stats;
}

console.log('🎨 Starting color conversion...\n');
const stats = processDirectory('./app');
console.log('\n📊 Conversion Summary:');
console.log(`   Total files processed: ${stats.total}`);
console.log(`   Files converted: ${stats.converted}`);
console.log('\n✅ Color conversion completed!');