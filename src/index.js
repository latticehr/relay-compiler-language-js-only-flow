// @flow
import RelayCompiler from 'relay-compiler';
import formatGeneratedModule from './formatGeneratedModule';

const find = RelayCompiler.__internal.FindGraphQLTags.find;

export default () => ({
  inputExtensions: ['js', 'jsx'],
  outputExtension: 'js',
  typeGenerator: RelayCompiler.FlowGenerator,
  formatModule: formatGeneratedModule,
  findGraphQLTags: find,
});
