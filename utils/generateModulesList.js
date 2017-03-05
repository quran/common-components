/*eslint-disable */
const fs = require('fs');

fs.readdir('./lib', (err, files) => {
  if (err) return console.log(err);
  const filteredFolder = files.filter(item => new RegExp(/^(?!.*images|styles).*$/g).test(item));
  const fileTemplate = folders => folders.map(folder => `exports.${folder} = require('./${folder}').default;`).join('\n');
  fs.writeFile('./lib/index.js', fileTemplate(filteredFolder), error => error ? console.log(error) : console.log(`The file was saved! Components: ${filteredFolder.join(', ')}`));
});

/*eslint-enable */
