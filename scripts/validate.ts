import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();
const SVG_DIR = path.join(ROOT_DIR, 'packages', 'assets', 'svg');
const METADATA_FILE = path.join(ROOT_DIR, 'packages', 'assets', 'metadata', 'emojis.json');

export function validateAssets() {
  console.log('🔍 Validating Kimo Emoji assets...');
  let errors = 0;

  if (!fs.existsSync(SVG_DIR)) {
    console.error('❌ Error: SVG directory does not exist:', SVG_DIR);
    process.exit(1);
  }

  if (!fs.existsSync(METADATA_FILE)) {
    console.error('❌ Error: Metadata file does not exist:', METADATA_FILE);
    process.exit(1);
  }

  const svgFiles = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith('.svg'));
  const svgNames = new Set(svgFiles.map((f) => f.replace(/\.svg$/, '')));
  
  const metadataRaw = fs.readFileSync(METADATA_FILE, 'utf-8');
  let metadataList: Array<{ name: string; label: string; category: string; keywords: string[] }> = [];
  try {
    metadataList = JSON.parse(metadataRaw);
  } catch (err) {
    console.error('❌ Error: Metadata JSON is malformed:', err);
    process.exit(1);
  }

  const metaNames = new Set(metadataList.map((m) => m.name));

  // Check that every SVG has metadata
  for (const name of svgNames) {
    if (!metaNames.has(name)) {
      console.error(`❌ Error: SVG file "${name}.svg" lacks entry in metadata/emojis.json`);
      errors++;
    }
  }

  // Check that every metadata entry has an SVG
  for (const name of metaNames) {
    if (!svgNames.has(name)) {
      console.error(`❌ Error: Metadata entry "${name}" lacks corresponding "${name}.svg"`);
      errors++;
    }
  }

  // Check each SVG structure
  for (const file of svgFiles) {
    const filePath = path.join(SVG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes('viewBox=')) {
      console.error(`❌ Error: "${file}" is missing viewBox attribute`);
      errors++;
    }

    if (!content.includes('<svg') || !content.includes('</svg>')) {
      console.error(`❌ Error: "${file}" does not have valid <svg> tag bounds`);
      errors++;
    }

    if (content.includes('<image') || content.includes('data:image/')) {
      console.error(`❌ Error: "${file}" contains embedded raster images`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`\n❌ Asset Validation Failed with ${errors} error(s)!`);
    process.exit(1);
  } else {
    console.log(`\n✨ All ${svgFiles.length} SVG assets and metadata validated successfully with 0 errors!`);
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.includes('validate');
if (isMainModule) {
  validateAssets();
}
