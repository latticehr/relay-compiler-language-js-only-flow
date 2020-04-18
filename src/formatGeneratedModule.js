// @flow
import type { FormatModule } from 'relay-compiler';

const formatGeneratedModule: FormatModule = ({
  docText,
  typeText,
  hash,
}) => {
  const hashText = hash ? `\n * ${hash}` : '';
  return `/**
 * ${'@'}flow${hashText}
 */
/* eslint-disable */
${typeText}
`;
};

module.exports = formatGeneratedModule;
