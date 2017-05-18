# Interface bug repro

This repo shows the bug referenced in https://github.com/angular/angular-cli/issues/2034
and https://github.com/webpack/webpack/issues/2977.

## Running the repro

First `npm install`.

To build/serve, run `npm run build` (or `serve`). Use `build-aot/serve-aot` to use AOT as well.

On AOT builds there are no warnings, on normal builds these two warnings will appear:
```
WARNING in ./app/app.component.ts
19:50-63 "export 'TestInterface' was not found in './test.service'

WARNING in ./app/app.component.ts
19:83-96 "export 'TestInterface' was not found in './test.service'
```

## Workarounds

Commenting out TestService in `./app/test.service.ts` will not show a warning, because after TS
compilation that module will have no import/export and thus be considered CommonJS by Webpack.
See https://github.com/webpack/webpack/issues/2977#issuecomment-245898520 for detailed explanation.

Using `import * as testService from './test.service';` and 
`@Input() test: testService.TestInterface;` in `./app/app.component.ts` will not show a warning.