const fs = require('fs');
const path = require('path');

const updateReferences = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace .ts references with .js
  content = content.replace(/\.ts"/g, '.js"');

  // Write the updated content back to the file
  fs.writeFileSync(filePath, content, 'utf-8');
};

const updateAllReferences = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updateAllReferences(fullPath); // Recursively process directories
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      updateReferences(fullPath); // Process .ts or .js files
    }
  });
};

const sourceDir = './dist'; 
updateAllReferences(sourceDir);


