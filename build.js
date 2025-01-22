const fs = require('fs-extra');
const path = require('path');

// Define source and destination paths
const redirectsFile = path.join(__dirname, '_redirects');
const distFolder = path.join(__dirname, 'dist');

// Ensure the dist folder exists
fs.ensureDirSync(distFolder);

// Copy the _redirects file to dist/
fs.copyFileSync(redirectsFile, path.join(distFolder, '_redirects'));

console.log('Copied _redirects to dist folder');
