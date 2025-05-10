/**
 * @fileoverview Script to automate the generation of barrel files (_index.ts) for specified folders
 * and update the `public-api.ts` file in an Angular library project.
 * 
 * @description
 * This script scans through predefined folders in the `src` directory, generates `_index.ts` files
 * for each folder by re-exporting all `.ts` files (excluding `.spec.ts` and `_index.ts`), and updates
 * the `public-api.ts` file to include these barrel files. This helps in maintaining cleaner and more
 * organized imports across the application.
 * 
 * @usage
 * 1. Place this script in the root of your Angular library project.
 * 2. Ensure the `foldersToUpdate` array contains the folder names you want to process.
 * 3. Run the script using Node.js:
 *    ```bash
 *    node update-index-files.js
 *    ```
 * 4. The script will:
 *    - Generate or update `_index.ts` files in the specified folders.
 *    - Update the `public-api.ts` file to include the generated `_index.ts` files.
 * 
 * @note
 * - The script assumes the `src` directory contains the folders listed in `foldersToUpdate`.
 * - Existing `_index.ts` files will be overwritten.
 * - Ensure you have write permissions for the `src` directory and its subdirectories.
 */
import fs from 'fs';
import path from 'path';


const baseDir = path.join(process.cwd(), 'src');
const publicApiPath = path.join(baseDir, 'public-api.ts');
const foldersToUpdate = [
  '_animations',
  '_constants',
  '_directives',
  '_enums',
  '_guards',
  '_interfaces',
  '_interceptors',
  '_models',
  '_pipes',
  '_resolvers',
  '_services',
  '_tokens',
  '_types',
  '_utilities',
  'components'
];

// Function to update public-api.ts
function updatePublicApi(indexFiles) {
  const content = indexFiles
    .map((indexFile) => `export * from './${indexFile.replace('.ts', '')}';`)
    .join('\n');

  fs.writeFileSync(publicApiPath, content, 'utf8');
  console.log(`Updated: ${publicApiPath}`);
}

const indexFiles = [];

foldersToUpdate.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);
  const indexFilePath = path.join(folderPath, '_index.ts');

  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath)
      .filter((file) => file.endsWith('.ts') && !file.endsWith('.spec.ts') && file !== '_index.ts')
      .map((file) => `export * from './${file.replace('.ts', '')}';`);

    const content = `/**
 * @fileoverview Barrel file for exporting ${folder}.
 * @description This file re-exports all files from the current directory,
 * allowing for cleaner and more organized imports in other parts of the application.
 */
${files.join('\n')}
`;

    fs.writeFileSync(indexFilePath, content, 'utf8');
    console.log(`Updated: ${indexFilePath}`);

    // Add the folder's _index.ts to the list for public-api.ts
    indexFiles.push(`${folder}/_index`);
  }
});

// Update public-api.ts with all _index.ts files
updatePublicApi(indexFiles);