# AngularLibraryBoilerplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Overview

This boilerplate helps you quickly set up and develop Angular libraries. It includes a pre-configured structure for components, services, utilities, themes, assets, and more. The project is optimized for scalability and maintainability.

### Key Features
- Pre-configured folder structure for Angular libraries.
- Automatic barrel file generation for cleaner imports.
- Support for custom themes, assets, styles, and fonts.
- Ready-to-use Angular Material theme integration.
- Built-in support for unit testing with Karma and Jasmine.
- Easy publishing to npm or private repositories.

---

## Getting Started

## Create a New Angular Library
Use the following command to create a new Angular library:
```bash
npx ngx-lib-starter-kit my-lib
```

OR

### 1. Clone the Repository
Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/your-repo/ngx-lib-starter-kit.git
cd ngx-lib-starter-kit
```

### 2. Install Dependencies
Install all required dependencies:
```bash
npm install
```
OR 
```bash
npm i
```

### 3. Customize the Structure
Define the necessary structures based on your project requirements and remove any unnecessary files or folders.

### 3.1 Update Project Name
Rename the project in `package.json` and `angular.json` to match your library's name:
1. Open `package.json` and update the `"name"` field:
    ```json
    {
      "name": "your-library-name"
    }
    ```
2. Open `angular.json` and update the `"defaultProject"` field:
    ```json
    {
      "defaultProject": "your-library-name"
    }
    ```

### 3.2 Organize Folder Structure
Customize the folder structure to suit your library's needs. For example:
- Place reusable components in the `src/components` folder.
- Add services to the `src/services` folder.
- Store utility functions in the `src/utils` folder.
- Keep styles and themes in the `src/styles` folder.

### 3.3 Remove Unnecessary Files
Delete any files or folders that are not required for your library. For example:
- Remove unused assets from the `src/assets` folder.
- Delete example components or services and ....

### 3.4 Update Documentation
Ensure the `README.md` file reflects the changes made to the structure and provides clear instructions for contributors and users.

### 4. Build the Library
Build the library for distribution:
```bash
npm run build
```

### 5. Publish the Library

Before publishing the library, ensure the following configurations are in place:

#### 5.1 Update `package.json`
1. Verify the `name` field matches your library's name.
2. Ensure the `version` field follows [Semantic Versioning](https://semver.org/).
3. Add a `description`, `keywords`, and `author` field to improve discoverability.
4. Specify the `main` and `module` entry points for your library:
    ```json
    {
      "main": "dist/your-library-name/bundles/your-library-name.umd.js",
      "module": "dist/your-library-name/fesm2015/your-library-name.js",
      "types": "dist/your-library-name/your-library-name.d.ts"
    }
    ```
5. Add a `files` field to include only necessary files in the package:
    ```json
    {
      "files": [
        "dist/",
        "README.md",
        "LICENSE"
      ]
    }
    ```

#### 5.2 Build the Library
Run the build command to generate the distribution files:
```bash
npm run build
```

#### 5.3 Login to npm
Authenticate with your npm account:
```bash
npm login
```

#### 5.4 Publish the Library
Publish the library to npm or a private repository:
```bash
npm publish --access public
```
For private repositories, ensure the `publishConfig` field in `package.json` is set correctly:
```json
{
  "publishConfig": {
    "registry": "https://your-private-registry-url/"
  }
}
```

#### 5.5 Verify the Published Package
After publishing, verify the package is available by installing it in a test project:
```bash
npm install your-library-name
```

---

## Running Tests

### Unit Tests
Run unit tests with the [Karma](https://karma-runner.github.io) test runner:
```bash
npm run test
```

### Linting
Ensure your code adheres to best practices by running ESLint:
```bash
npm run lint
```

---

## Additional Resources

- [Angular CLI Documentation](https://angular.io/cli)
- [Karma Test Runner](https://karma-runner.github.io)
- [ESLint Documentation](https://eslint.org)
- [Publishing to npm](https://docs.npmjs.com/cli/v9/commands/npm-publish)

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
