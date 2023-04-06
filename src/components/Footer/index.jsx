import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const Footer = ({children}) => (
    <footer className={styles.footer}>
      {children}
      <Link
        href={`#`}
        passHref
      >
        <a
          target='_blank'
          rel='noopener noreferrer'>
          <div className={styles.footer_copyright}>
            <p className='opensans'>
              🇦🇫 From Afganistan with Love ❤️{' '}
            </p>
            <span className={styles.footer_logo}>
              <Image src='/cosmic.svg' objectFit='contain' alt=" Logo" width={90} height={40} />
            </span> 
          </div>
        </a>
      </Link>
    </footer>
);

export default Footer;