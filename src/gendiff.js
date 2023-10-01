import parse from './parse.js';

function main(filepath1, filepath2) {
  const fileData1 = parse(filepath1);
  const fileData2 = parse(filepath2);

  console.log({ fileData1 });
  console.log({ fileData2 });
};

export default main;
