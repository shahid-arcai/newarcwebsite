// Convert images to WebP format for better compression
// Run with: node convert-to-webp.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  
  if (!imageExtensions.includes(ext)) {
    return;
  }

  const webpPath = imagePath.replace(ext, '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Skipping ${path.basename(imagePath)} - WebP already exists`);
    return;
  }

  try {
    const stats = fs.statSync(imagePath);
    const originalSize = stats.size;

    await sharp(imagePath)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Converted ${path.basename(imagePath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(1)} KB`);
    console.log(`   Savings: ${savings}%\n`);
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(imagePath)}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await convertToWebP(filePath);
    }
  }
}

console.log('🚀 Starting WebP conversion...\n');
console.log('📁 Processing directory:', publicDir, '\n');

processDirectory(publicDir)
  .then(() => {
    console.log('\n✨ WebP conversion complete!');
  })
  .catch(error => {
    console.error('\n❌ Error during conversion:', error);
    process.exit(1);
  });
