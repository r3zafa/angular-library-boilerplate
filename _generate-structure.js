import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src/lib');

const structure = {
  _animations: ['_index.ts', 'example.animation.ts'],
  _constants: ['_index.ts', 'example.constant.ts'],
  _directives: ['_index.ts', 'example.directive.ts'],
  _enums: ['_index.ts', 'example.enum.ts'],
  _guards: ['_index.ts', 'example.guard.ts'],
  _interfaces: ['_index.ts', 'example.interface.ts'],
  _interceptors: ['_index.ts', 'example.interceptor.ts'],
  _models: ['_index.ts', 'example.model.ts'],
  _pipes: ['_index.ts', 'example.pipe.ts'],
  _resolvers: ['_index.ts', 'example.resolver.ts'],
  _services: ['_index.ts', 'example.service.ts'],
  _tokens: ['_index.ts', 'example.token.ts'],
  _types: ['_index.ts', 'example.type.ts'],
  _utilities: ['_index.ts', 'example.util.ts'],
  components: ['_index.ts', 'example.component.ts'],
  '@assets/fonts': ['README.md'], // Placeholder for fonts
  '@assets/images': ['README.md'], // Placeholder for images
};

// Function to create folders and files
function createStructure() {
  Object.entries(structure).forEach(([folder, files]) => {
    const folderPath = path.join(baseDir, folder);

    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`Created folder: ${folderPath}`);
    } else {
      console.log(`Skipped existing folder: ${folderPath}`);
    }

    // Create files in the folder
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      if (!fs.existsSync(filePath)) {
        let content = '';

        // Add default content for specific file types
        if (file === '_index.ts') {
          content = `/**
 * @fileoverview Barrel file for exporting ${folder}.
 * @description This file re-exports all files from the current directory,
 * allowing for cleaner and more organized imports in other parts of the application.
 */
`;
        } else if (file.endsWith('.ts')) {
          content = `// Example ${file.replace('.ts', '')}`;
        } else if (file.endsWith('.json')) {
          content = '{}';
        } else if (file.endsWith('.scss')) {
          content = `/* Example theme styles */`;
        } else if (file === 'README.md') {
          content = `# ${folder}\n\nThis folder contains ${folder.split('/').pop()} files.`;
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Created file: ${filePath}`);
      } else {
        console.log(`Skipped existing file: ${filePath}`);
      }
    });
  });
}

// Run the script
createStructure();