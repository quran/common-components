import React from 'react';
import Icon from '../Icon';
import Popover from '../Popover';
import styles from './style.scss';

const sites = [
  {
    name: 'Quran',
    logo: '//assets-1f14.kxcdn.com/images/logo-lg.png',
    href: 'https://quran.com'
  },
  {
    name: 'Audio',
    logo: 'https://quranicaudio.com/favicon.ico',
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

const Sites = () => (
  <Popover
    trigger={
      <span style={{ cursor: 'pointer' }}>
        <Icon type="grid" />
      </span>
    }
  >
    <div>
      {
        sites.map(site => (
          <div className={styles.site} key={site.name}>
            <a
              href={site.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className={styles.icon}
                style={{
                  background: `url(${site.logo}) center center no-repeat`,
                  backgroundSize: 'contain'
                }}
              />
              {site.name}
            </a>
          </div>
        ))
      }
    </div>
  </Popover>
);

export default Sites;
