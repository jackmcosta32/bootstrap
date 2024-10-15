import {
  Tree,
  formatFiles,
  generateFiles,
  OverwriteStrategy,
  addProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import { kebabCase, upperFirst } from 'lodash';
import { ComponentGeneratorGeneratorSchema } from './schema';

export async function componentGeneratorGenerator(
  tree: Tree,
  options: ComponentGeneratorGeneratorSchema
) {
  const { name, project } = options;

  const kebabCaseName = kebabCase(name);
  const upperFirstName = upperFirst(name);

  const target = `${project}/src/components/${kebabCaseName}`;

  addProjectConfiguration(tree, name, {
    root: project,
    sourceRoot: project,
    targets: {},
  });

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    target,
    {
      name,
      kebabCaseName,
      upperFirstName,
    },
    {
      overwriteStrategy: OverwriteStrategy.ThrowIfExisting,
    }
  );

  await formatFiles(tree);
}

export default componentGeneratorGenerator;
