// ICO Generator Script
// Run: node generate-ico.js

import toIco from 'to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateIco() {
  try {
    console.log('🎨 Generating favicon.ico...\n');

    const inputFiles = [
      path.join(__dirname, 'public', 'favicon-16x16.png'),
      path.join(__dirname, 'public', 'favicon-32x32.png'),
      path.join(__dirname, 'public', 'favicon-48x48.png')
    ];

    // Read all input files
    const buffers = inputFiles.map(file => fs.readFileSync(file));

    // Generate ICO file
    const ico = await toIco(buffers);
    
    // Write ICO file
    const outputFile = path.join(__dirname, 'public', 'favicon.ico');
    fs.writeFileSync(outputFile, ico);

    console.log('✅ Generated: favicon.ico (multi-size: 16x16, 32x32, 48x48)');
    console.log('✨ ICO generation complete!\n');

  } catch (error) {
    console.error('❌ Error generating ICO:', error.message);
  }
}

generateIco();
