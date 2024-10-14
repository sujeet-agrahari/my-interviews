const fs = require('fs');
const path = require('path');
const defaultoutputDir = './data';

const checkDir = (outputDir) => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
};

const writeFile = (fileName, content, outputDir = defaultoutputDir) => {
  try {
    checkDir(outputDir);

    fs.writeFileSync(
      path.join(outputDir, fileName),
      JSON.stringify(content, null, 4)
    );
  } catch (err) {
    console.log('write file error', error);
    return error;
  }
};

const readFile = (fileName, dir = defaultoutputDir) => {
  try {
    if (fs.existsSync(path.join(dir, fileName))) {
      return JSON.parse(fs.readFileSync(path.join(dir, fileName), 'utf-8'));
    }
    console.warn(
      `No file found for ${dir} ${fileName}, hence returning empty object`
    );
    return {};
  } catch (err) {
    console.error('read file error', error);
    return error;
  }
};

module.exports = { writeFile, readFile };

/**
 * usage:
 * const jsonData = readFile('./file-name.json') // searches data directory by default
 * const writeJsonData = writeFile('./file-name.json', jsonRecords);
 */
