import {
  faGithub,
  faInstagram,
  faLinkedin,
  faNpm,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { CMSLink } from '../../src/cms-integration/markdown/links';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/LuwkasLima',
    icon: faGithub,
    title: 'GitHub',
  },
  // {
  //   href: 'https://www.instagram.com',
  //   icon: faInstagram,
  //   title: 'Instagram',
  // },
  {
    href: 'https://www.linkedin.com/in/lucasmaialima/',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  // {
  //   href: 'https://www.npmjs.com',
  //   icon: faNpm,
  //   title: 'NPM',
  // },
  {
    href: 'https://twitter.com/LuwkasLima',
    icon: faTwitter,
    title: 'Twitter',
  },
];
