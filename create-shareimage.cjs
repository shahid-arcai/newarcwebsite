const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createShareImage() {
  try {
    console.log('Creating share image from logo...\n');

    const logoPath = path.join(__dirname, 'public', 'logo.png');
    const outputPath = path.join(__dirname, 'public', 'shareimage.png');

    // Check if logo exists
    if (!fs.existsSync(logoPath)) {
      console.error('Error: logo.png not found in public folder!');
      return;
    }

    // Get logo metadata
    const logoMetadata = await sharp(logoPath).metadata();
    console.log(`Logo dimensions: ${logoMetadata.width}x${logoMetadata.height}`);

    // Create a 1200x630 image with black background and centered logo
    // This is the standard Open Graph image size
    const width = 1200;
    const height = 630;
    
    // Calculate logo size (make it about 60% of the image width)
    const logoWidth = Math.floor(width * 0.6);
    const logoHeight = Math.floor((logoWidth / logoMetadata.width) * logoMetadata.height);

    // Resize logo
    const resizedLogo = await sharp(logoPath)
      .resize(logoWidth, logoHeight, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Create black background with centered logo
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 0, g: 0, b: 0 }
      }
    })
    .composite([{
      input: resizedLogo,
      gravity: 'center'
    }])
    .png({
      quality: 100,
      compressionLevel: 9,
    })
    .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(`✓ Created shareimage.png (${width}x${height}) - ${(stats.size / 1024).toFixed(2)} KB`);
    
    console.log('\n✓ Base share image created successfully!');
    console.log('Now run: node generate-share-images.cjs to create all sizes');
    
  } catch (error) {
    console.error('Error creating share image:', error);
  }
}

createShareImage();
