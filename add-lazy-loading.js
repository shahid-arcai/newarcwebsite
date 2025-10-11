#!/usr/bin/env node

/**
 * Script to add lazy loading attributes to images
 * Run with: node add-lazy-loading.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');
const appDir = path.join(__dirname, 'src', 'app');

// Patterns to match
const imgPattern = /<img\s+([^>]*?)(?:\/?>)/gi;

// Files that should have eager loading (above the fold)
const eagerLoadFiles = ['Navbar.tsx', 'Hero.tsx', 'LoadingScreen.tsx'];

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);
  
  // Determine if this file should use eager loading
  const shouldBeEager = eagerLoadFiles.some(f => filename.includes(f));
  
  let modified = false;
  const newContent = content.replace(imgPattern, (match, attributes) => {
    // Skip if already has loading attribute
    if (/loading\s*=/.test(attributes)) {
      return match;
    }
    
    // Add appropriate loading attribute
    modified = true;
    const loadingAttr = shouldBeEager ? 'loading="eager" fetchPriority="high"' : 'loading="lazy"';
    const decodingAttr = shouldBeEager ? 'decoding="sync"' : 'decoding="async"';
    
    // Add attributes before the closing tag
    if (match.endsWith('/>')) {
      return `<img ${attributes} ${loadingAttr} ${decodingAttr} />`;
    } else {
      return `<img ${attributes} ${loadingAttr} ${decodingAttr}>`;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
    return true;
  }
  
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        count++;
      }
    }
  });
  
  return count;
}

console.log('🚀 Adding lazy loading attributes to images...\n');

let totalUpdated = 0;
totalUpdated += processDirectory(componentsDir);
totalUpdated += processDirectory(appDir);

console.log(`\n✅ Done! Updated ${totalUpdated} file(s)`);
