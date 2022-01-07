import { strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  // externalSchematic,
  // MergeStrategy,
  mergeWith,
  move,
  Rule,
  // SchematicContext,
  template,
  // Tree,
  url,
} from '@angular-devkit/schematics';
import {
  basename,
  normalize,
  dirname,
} from 'path';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function qsProject(_options: any): Rule {
  return (tree, context) => {
    _options.name = basename(_options.name);
    _options.path = normalize(dirname((_options.path + '/' + _options.name)));

    const templateSource = apply(
      url('./files'),
      [
        template({
          ..._options,
          ...strings,
        }),
        move(_options.path),
      ],
    );
    return chain([mergeWith(templateSource)])(tree, context);
  }
}

