// Favicon Generator Script
// This script generates multiple favicon sizes for optimal SEO and cross-platform compatibility
// Run: node generate-favicons.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [16, 32, 48, 64, 128, 192, 256, 512];
const inputFile = path.join(__dirname, 'public', 'favicon.png');
const outputDir = path.join(__dirname, 'public');

// Apple Touch Icon size
const appleTouchIconSize = 180;

async function generateFavicons() {
  try {
    console.log('🎨 Starting favicon generation...\n');

    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.error('❌ Error: favicon.png not found in public directory');
      return;
    }

    // Generate PNG favicons in multiple sizes
    for (const size of sizes) {
      const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputFile);
      console.log(`✅ Generated: favicon-${size}x${size}.png`);
    }

    // Generate Apple Touch Icon (180x180)
    const appleTouchIconFile = path.join(outputDir, 'apple-touch-icon.png');
    await sharp(inputFile)
      .resize(appleTouchIconSize, appleTouchIconSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(appleTouchIconFile);
    console.log(`✅ Generated: apple-touch-icon.png (${appleTouchIconSize}x${appleTouchIconSize})`);

    // Generate favicon.ico (multi-size ICO file with 16, 32, 48 sizes)
    // Note: Sharp doesn't natively support ICO creation, so we'll create individual sizes
    // You can use an online converter or install 'to-ico' package for actual ICO generation
    console.log('\n📝 Note: For favicon.ico creation, you can:');
    console.log('   1. Use an online converter like https://www.icoconverter.com/');
    console.log('   2. Install "to-ico" package: npm install to-ico');
    console.log('   3. Upload favicon-16x16.png, favicon-32x32.png, favicon-48x48.png\n');

    console.log('✨ Favicon generation complete!\n');
    console.log('📋 Generated files:');
    sizes.forEach(size => console.log(`   - favicon-${size}x${size}.png`));
    console.log(`   - apple-touch-icon.png`);
    console.log('\n🚀 Next steps:');
    console.log('   1. Update layout.tsx with favicon links');
    console.log('   2. Generate favicon.ico from the 16x16, 32x32, 48x48 PNG files');
    console.log('   3. Test favicons at https://realfavicongenerator.net/favicon_checker\n');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
  }
}

// Run the favicon generation
generateFavicons();
