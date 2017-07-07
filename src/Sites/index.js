import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Popover from '../Popover';

const sites = [
  {
    name: 'Quran',
    logo: '//assets-1f14.kxcdn.com/images/logo-lg.png',
    href: 'https://quran.com'
  },
  {
    name: 'Audio',
    logo: 'https://raw.githubusercontent.com/quran/audio.quran.com/master/static/favicon.ico',
    href: 'https://quranicaudio.com'
  },
  {
    name: 'Salah',
    logo: 'http://salah.com/images/favicon.png',
    href: 'http://salah.com'
  },
  {
    name: 'Sunnah',
    logo: 'https://sunnah.com/favicon.ico',
    href: 'https://sunnah.com'
  }
];

const Site = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 2px;
  box-sizing: border-box;

  &:hover{
    border: 1px solid rgba(#777, 0.25);
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #777;
`;

const Span = styled.span`
  height: 35px;
  width: 100%;
  display: block;
  margin-bottom: 5px;
`;

const Sites = ({ className, popoverClassName }) => (
  <Popover
    className={popoverClassName}
    attachment="top center"
    trigger={
      <span style={{ cursor: 'pointer' }}>
        <Icon type="grid" />
      </span>
    }
  >
    <div>
      {sites.map(site => (
        <Site key={site.name}>
          <Link
            href={site.href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Span
              style={{
                background: `url(${site.logo}) center center no-repeat`,
                backgroundSize: 'contain'
              }}
            />
            {site.name}
          </Link>
        </Site>
      ))}
    </div>
  </Popover>
);

Sites.propTypes = {
  className: PropTypes.string,
  popoverClassName: PropTypes.string
};

Sites.defaultProps = {
  className: '',
  popoverClassName: ''
};

export default Sites;
