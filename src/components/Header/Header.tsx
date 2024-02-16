import { Dispatch, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from 'src/assets/icons/menu.svg';
import CrossIcon from 'src/assets/icons/cross.svg';
import CartIcon from 'src/assets/icons/cart.svg';
import styles from './Header.module.css';

const Header = () => {
    const [isNavShow, setIsNavShow] = useState(false);

    // TODO: make left to right animation for nav menu
    return (
        <header className={[styles['header'], 'content'].join(' ')}>
            {
                isNavShow && <Navbar setIsNavShow={setIsNavShow} />
            }
            <div className={styles['header__left']}>
                <img 
                    onClick={() => setIsNavShow(true)}
                    src={MenuIcon} 
                    alt='menu'
                />
                <h1 className={styles['header__title']}>3legant</h1>
            </div>
            <nav className={styles['header__nav']}>
                <ul className={styles['header__links']}>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) =>
                                [isActive ? styles['header__link_active'] : "", styles['header__link']].join(' ')
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' 
                            className={({ isActive }) =>
                                [isActive ? styles['header__link_active'] : "", styles['header__link']].join(' ')
                            }
                        >Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' 
                            className={({ isActive }) =>
                                [isActive ? styles['header__link_active'] : "", styles['header__link']].join(' ')
                            }
                        >Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles['header__right']}>
                <img src={CartIcon} />
            </div>
        </header>
    )
};

type NavbarProps = {
    setIsNavShow: Dispatch<SetStateAction<boolean>>,
}

const Navbar = ({setIsNavShow}: NavbarProps) => {
    return (
        <nav className={styles['nav-menu']}>
            <div className={styles['nav-menu__header']}>
                <h1 className={styles['header__title']}>3legant</h1>
                <img 
                    onClick={() => setIsNavShow(false)}
                    src={CrossIcon} 
                    alt='close' 
                />
            </div>
            <ul className={styles['nav-menu__links']}>
                <li>
                    <NavLink to='/' className={styles['nav-menu__link']}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/shop' className={styles['nav-menu__link']}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={styles['nav-menu__link']}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;