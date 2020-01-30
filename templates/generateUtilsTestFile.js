function generateUtilsTestFile(fileName) {
  const content =
`// import { util } from '../${fileName}.utils';

// describe('util', () => {
//   it('description', () => {
//     //
//   });
// });
`;
  return content;
}

module.exports = generateUtilsTestFile;
