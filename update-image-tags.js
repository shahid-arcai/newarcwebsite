// Update image tags to use WebP with PNG/JPG fallback
// Run with: node update-image-tags.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const fileExtensions = ['.tsx', '.ts', '.jsx', '.js'];

function updateImageTags(content, filePath) {
  let modified = false;
  let newContent = content;

  // Pattern 1: <img src="/image.png" ... />
  // Convert to: <picture><source srcSet="/image.webp" type="image/webp"/><img src="/image.png" .../></picture>
  const imgRegex = /<img\s+([^>]*src=["']([^"']+\.(png|jpg|jpeg))["'][^>]*)\/>/gi;
  
  newContent = newContent.replace(imgRegex, (match, attributes, srcPath, ext) => {
    // Skip if already in a picture element
    const beforeMatch = content.substring(Math.max(0, content.indexOf(match) - 100), content.indexOf(match));
    if (beforeMatch.includes('<picture>')) {
      return match;
    }

    modified = true;
    const webpPath = srcPath.replace(`.${ext}`, '.webp');
    
    // Preserve all attributes
    const imgTag = `<img ${attributes}/>`;
    
    return `<picture>
            <source srcSet="${webpPath}" type="image/webp" />
            ${imgTag}
          </picture>`;
  });

  return { content: newContent, modified };
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { content: newContent, modified } = updateImageTags(content, filePath);

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Updated: ${path.relative(__dirname, filePath)}`);
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file === 'node_modules' || file === '.next' || file === 'out') {
        continue;
      }
      updatedCount += processDirectory(filePath);
    } else {
      const ext = path.extname(file);
      if (fileExtensions.includes(ext)) {
        if (processFile(filePath)) {
          updatedCount++;
        }
      }
    }
  }

  return updatedCount;
}

console.log('🚀 Starting image tag updates...\n');
console.log('📁 Processing directory:', srcDir, '\n');

try {
  const count = processDirectory(srcDir);
  console.log(`\n✨ Updated ${count} file(s)`);
} catch (error) {
  console.error('\n❌ Error:', error);
  process.exit(1);
}
