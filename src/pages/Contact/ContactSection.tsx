import StoreSvg from 'src/assets/icons/store.svg';
import CallSvg from 'src/assets/icons/call.svg';
import MailSvg from 'src/assets/icons/mail.svg';
import styles from './ContactSection.module.css';

const ContactSection = () => {
    // TODO: map
    return (
        <section className={styles['contact']}>
            <h2 className={styles['contact__title']}>Contact Us</h2>
            <div className={styles['contact-grid']}>
                <div className={styles['contact-grid__item']}>
                    <img src={StoreSvg} alt='store' />
                    <h4>Address</h4>
                    <p>234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
                </div>
                <div className={styles['contact-grid__item']}>
                    <img src={CallSvg} alt='call' />
                    <h4>Contact us</h4>
                    <p>+84 234 567 890</p>
                </div>
                <div className={styles['contact-grid__item']}>
                    <img src={MailSvg} alt='mail' />
                    <h4>Email</h4>
                    <p>hello@3legant.com</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;