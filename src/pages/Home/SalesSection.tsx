import Sales from 'src/assets/images/sales.png';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const SalesSection = () => {
    return (
        <section className={styles['sales']}>
            <img src={Sales} alt='sales' />
            <div className={styles['sales__right']}>
                <span className={styles['sales__sale']}>SALE UP TO 35% OFF</span>
                <h2 className={styles['sales__title']}>HUNDREDS of New lower prices!</h2>
                <p>It’s more affordable than ever to give every room in your home a stylish makeover</p>
                <Link className='arrow-link' to='/shop'>Shop Now</Link>
            </div>
        </section>
    );
};

export default SalesSection;