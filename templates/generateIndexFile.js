function generateIndexFile(fileName, args) {
  const asDataLayer = args.dataLayer ? 'DataLayer' : '';
  const content =
`import ${fileName}${asDataLayer} from './${fileName}${asDataLayer}';

export default ${fileName}${asDataLayer};
`;
  return content;
}

module.exports = generateIndexFile;
