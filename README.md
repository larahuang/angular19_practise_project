
```
# angular19_practise_project
Node v20.17.0
安裝指令
```
npm create vite@latest

Angular CLI 19.2.5.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


### 使用Angular Material來幫我們快速建立各種元件
```
ng add @angular/material
```
生成的檔案會是『大寫小寫英文-大寫小寫英文.component』副檔名會有
<ol>
  <li><b>html:</b>HTML檔案</li>
  <li><b>scss:</b>樣式</li>
  <li><b>spec.ts:</b>單元測試檔案</li>
  <li><b>ts:</b>資料定義與函式</li>
</ol>
終端機
✔ Determining Package Manager
  › Using package manager: npm
✔ Searching for compatible package version
  › Found compatible package version:
    @angular/material@19.2.7.
✔ Loading package information from registry
⠹ Confirming installation

The package @angular/material@19.2.7 will be installed and 
executed.
Would you like to proceed? (Y/n)


建立組件指令
```
ng g c 頁面或是功能
```
