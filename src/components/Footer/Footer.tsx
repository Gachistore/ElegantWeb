import { Link } from 'react-router-dom';
import InstIcon from 'src/assets/icons/instagram.svg';
import FaceIcon from 'src/assets/icons/facebook.svg';
import YoutIcon from 'src/assets/icons/youtube.svg';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <div className={['content', styles['footer']].join(' ')}>
                <div className={styles['footer__top']}>
                    <div className={styles['footer__title-container']}>
                        <h2 className={styles['footer__title']}>3legant</h2>
                        <div className={styles['footer__delimiter']}></div>
                        <span>Gift & Decoration Store</span>
                    </div>
                    <nav>
                        <ul className={styles['footer__links']}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles['footer__bottom']}>
                    <ul className={styles['footer__social']}>
                        <li>
                            <a href=''><img src={InstIcon} alt='instagram' /></a>
                        </li>
                        <li>
                            <a href=''><img src={FaceIcon} alt='facebook' /></a>
                        </li>
                        <li>
                            <a href=''><img src={YoutIcon} alt='youtube' /></a>
                        </li>
                    </ul>
                    <div className={styles['footer__rules']}>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Terms of Use</a>
                    </div>
                    <span>Copyright © 2023 3legant. All rights reserved</span>
                </div> 
            </div>
        </footer>
    );
};

export default Footer;