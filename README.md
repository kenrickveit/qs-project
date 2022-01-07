# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### To run

##### Some background on npm scripts
package.json defines a block calles `scripts`. Any key in this block may be run as an npm script (eg. `npm run start`). To pass arguments to the script defined within that key's value, use `--`. 

So, for example, if you have a scripts block like this:

```
"scripts": {
  "myCustom": "myCustomCommand"
}
```

...And you wanted to pass arguments to the `myCustomCommand` command/script, you would call it like this:

```
npm run myCustom -- --myArg=foo -v=8
```

Npm also allows for shortcuts for certain keys, which will run without the keyword `run`.
Some examples are `start`, and `test`

So, to run the `start` script, you may run `npm start` or `npm run start`. These are interchangeable.

##### To run 

`npm start`

##### To run with args

`npm start -- [args, here]`

##### To run an example without interactive prompt

`npm start -- --path=tmp --name=foo`, then view output in the tmp dir in root of project

##### To run an example with interactive prompt

`npm start`, then view out in the path specified