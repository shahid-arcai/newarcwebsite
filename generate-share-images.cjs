const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'shareimage.png');

// Different sizes for various platforms
const sizes = [
  { name: 'shareimage-1200x630.png', width: 1200, height: 630 }, // Facebook, LinkedIn
  { name: 'shareimage-1200x627.png', width: 1200, height: 627 }, // Alternative Facebook
  { name: 'shareimage-1200x675.png', width: 1200, height: 675 }, // Google
  { name: 'shareimage-600x315.png', width: 600, height: 315 },   // Smaller version
  { name: 'shareimage-800x418.png', width: 800, height: 418 },   // Twitter optimized
];

async function generateImages() {
  try {
    console.log('Starting image generation...\n');

    for (const size of sizes) {
      const outputPath = path.join(__dirname, 'public', size.name);
      
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .png({
          quality: 90,
          compressionLevel: 9,
        })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`✓ Created ${size.name} (${size.width}x${size.height}) - ${(stats.size / 1024).toFixed(2)} KB`);
    }

    console.log('\n✓ All share images generated successfully!');
    
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateImages();
