import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

const mapping = {
  '.json': (data) => JSON.parse(data),
};

function parse(filepath) {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  const extention = path.parse(absolutePath).ext;
  
  return mapping[extention](rawData);
}

export default parse;
