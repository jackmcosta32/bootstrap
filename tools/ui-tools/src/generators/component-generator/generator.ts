import {
  Tree,
  formatFiles,
  generateFiles,
  addProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import { kebabCase } from 'lodash';
import { ComponentGeneratorGeneratorSchema } from './schema';

export async function componentGeneratorGenerator(
  tree: Tree,
  options: ComponentGeneratorGeneratorSchema
) {
  const projectRoot = options.project;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src/components/${kebabCase(options.name)}`,
    targets: {},
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    name: options.name,
    kebabCase,
  });

  await formatFiles(tree);
}

export default componentGeneratorGenerator;
