function generateIndexFile(fileName, args) {
  const asDataLayerName = args.dataLayer ? 'DataLayer' : '';
  const asDataLayerFile = args.dataLayer ? '.dataLayer' : '';
  const content =
`import ${fileName}${asDataLayerName} from './${fileName}${asDataLayerFile}';

export default ${fileName}${asDataLayerName};
`;
  return content;
}

module.exports = generateIndexFile;
