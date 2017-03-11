/*eslint-disable */
const fs = require('fs');
const svgFolder = __dirname + '/surahTitleSvg/';
fs.readdir(svgFolder, (err, files) => {
  if (err) return console.log(err);

  files.map((file, index) => {
    const svgPath = svgFolder + file;
    fs.readFile(svgPath, 'utf8', function (err, data) {
      if (err) return console.log(err);
      const surahID = `Surah${index}`;
      const template = () => {
        const replaceFill = data.replace(/fill\=\"\#*\S{6}\"/g, "fill={props.color}")
                                .replace(/class="ayah-name-svg"/g, `className={\`ayah-name-svg ayah-name-svg__${surahID} \${props.className}\`} {...props}`)
                                .replace(/space="preserve"/g, '');
        return `
import React, { PropTypes } from 'react';

const ${surahID} = (props) => (${replaceFill});
${surahID}.propTypes = { color: PropTypes.string.isRequired, className: PropTypes.string };
${surahID}.defaultProps = { color: '#0000000', className: '' };
export default ${surahID};
`
      }

      fs.writeFile(`./src/SurahTitle/Surahs/${index + 1}.js`, template(), error => error ? console.log(error) : console.log(`The file was saved! ${svgPath}`));
    });
  })
});

/*eslint-enable */
