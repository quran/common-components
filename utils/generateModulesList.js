const fs = require('fs');

fs.readdir('./lib', (err, files) => {// eslint-disable-line
  if (err) return console.log(err);// eslint-disable-line
  const fileTemplate = filesList => filesList.map(file => `exports.${file} = require('./${file}').default;`).join('\n');
  fs.writeFile('./lib/index.js', fileTemplate(files), error => error ? console.log(error) : console.log('The file was saved!'));// eslint-disable-line
});
