#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to convert
const files = [
  'SOAL_LOMBA_MATEMATIKA_KELAS_2_SD.html',
  'SOAL_DISCOVERY_OF_CHAMPIONS_KELAS_1-6_SD.html',
  'SOAL_LEVEL_1_KELAS_1-2_SD.html'
];

console.log('HTML files created successfully!');
console.log('\nTo convert to PDF, you have these options:\n');
console.log('Option 1: Open in browser and print to PDF');
files.forEach(file => {
  console.log(`  open ${file}`);
});

console.log('\nOption 2: Use Chrome command line (if installed):');
files.forEach(file => {
  const pdfFile = file.replace('.html', '.pdf');
  console.log(`  google-chrome --headless --disable-gpu --print-to-pdf=${pdfFile} ${file}`);
});

console.log('\nOption 3: Use wkhtmltopdf (if installed):');
files.forEach(file => {
  const pdfFile = file.replace('.html', '.pdf');
  console.log(`  wkhtmltopdf ${file} ${pdfFile}`);
});
