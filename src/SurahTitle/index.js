import React, { PropTypes } from 'react';

const SurahTitle = ({ chapterNumber, color, className, ...props }) => {
  const SurahSvg = require(`./Surahs/${chapterNumber}.js`).default; // eslint-disable-line
  return <SurahSvg color={color} className={className} {...props} />;
};

SurahTitle.defaultProps = {
  color: '#000000',
  className: '',
  chapterNumber: 1
};

SurahTitle.propTypes = {
  chapterNumber: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string
};


export default SurahTitle;
