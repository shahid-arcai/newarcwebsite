const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'shareimage.png');
const outputPath = path.join(__dirname, 'public', 'shareimage-optimized.png');
const backupPath = path.join(__dirname, 'public', 'shareimage-original.png');

async function optimizeImage() {
  try {
    // Get original file info
    const stats = fs.statSync(inputPath);
    console.log(`Original file size: ${(stats.size / 1024).toFixed(2)} KB`);

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    // Create backup of original
    fs.copyFileSync(inputPath, backupPath);
    console.log('✓ Backup created: shareimage-original.png');

    // Optimize: resize to 1200x630 and compress
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .png({
        quality: 85,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized file size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);

    // Replace original with optimized
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    
    console.log('✓ Image optimized successfully!');
    console.log(`✓ Reduced by ${((stats.size - optimizedStats.size) / 1024).toFixed(2)} KB`);
    console.log('✓ Original saved as: shareimage-original.png');
    
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
