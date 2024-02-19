import { Link } from 'react-router-dom';
import ContactSection from './ContactSection';
import ContactImg from 'src/assets/images/contact.png';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <main className='content'>
            <section className={styles['description']}>
                <h1 className={styles['description__title']}>We believe in sustainable decor. We’re passionate about life at home.</h1>
                <p className={styles['description__p']}>
                    Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, 
                    which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, 
                    faithful to the shapes of each period, with a touch of the present
                </p>
            </section>
            <section className={styles['about']}>
                <img className={styles['about__img']} src={ContactImg} alt='contact' />
                <div className={styles['about__description']}>
                    <h2 className={styles['about__title']}>About Us</h2>
                    <div className={styles['about__ps']}>
                        <p>
                            3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        </p>
                        <p>
                            Our customer service is always prepared to support you 24/7
                        </p>
                    </div>
                    <Link to='/shop' className='arrow-link'>Shop Now</Link>
                </div>
            </section>
            <ContactSection/>
        </main>
    );
};

export default Contact;