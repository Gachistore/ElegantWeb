import LivingRoom from 'src/assets/images/living_room.png';
import Bedroom from 'src/assets/images/bedroom.png';
import Kitchen from 'src/assets/images/kitchen.png';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
    return (
        <section className={['content', styles['categories-grid']].join(' ')}>
            <div className={styles['categories-grid__item']}>
                <div className={styles['categoires-grid__text']}>
                    <h3 className={styles['categories-grid__title']}>Living Room</h3>
                    <Link className={[styles['categories-grid__link'], 'arrow-link'].join(' ')}  
                        to='/shop/?category=Living Room'>Shop Now</Link>
                </div>
                <img src={LivingRoom} alt='living room' />
            </div>
            <div className={styles['categories-grid__item']}>
                <div className={styles['categoires-grid__text']}>
                    <h3 className={styles['categories-grid__title']}>Bedroom</h3>
                    <Link className={[styles['categories-grid__link'], 'arrow-link'].join(' ')}  
                        to='/shop/?category=Bedroom'>Shop Now</Link>
                </div>
                <img src={Bedroom} alt='bedroom' />
            </div>
            <div className={styles['categories-grid__item']}>
                <div className={styles['categoires-grid__text']}>
                    <h3 className={styles['categories-grid__title']}>Kitchen</h3>
                    <Link className={[styles['categories-grid__link'], 'arrow-link'].join(' ')}  
                        to='/shop/?category=Kitchen'>Shop Now</Link>
                </div>
                <img src={Kitchen} alt='kitchen' />
            </div>
        </section>
    );
};

export default CategoriesSection;