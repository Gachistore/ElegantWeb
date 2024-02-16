import FastDelivery from 'src/assets/icons/fast_delivery.svg';
import Money from 'src/assets/icons/money.svg';
import Lock from 'src/assets/icons/lock.svg';
import Call from 'src/assets/icons/call.svg';
import styles from './Home.module.css';

const OffersSection = () => {
    return (
        <section className={['content', styles['offers-grid']].join(' ')}>
            <div className={styles['offers-grid__item']}>
                <img src={FastDelivery} alt='fast delivery' />
                <h3>Free Shipping</h3>
                <p>Order above $200</p>
            </div>
            <div className={styles['offers-grid__item']}>
                <img src={Money} alt='money' />
                <h3>Money-back</h3>
                <p>30 days guarantee</p>
            </div>
            <div className={styles['offers-grid__item']}>
                <img src={Lock} alt='lock' />
                <h3>Secure Payments</h3>
                <p>Secured by Stripe</p>
            </div>
            <div className={styles['offers-grid__item']}>
                <img src={Call} alt='call' />
                <h3>24/7 Support</h3>
                <p>Phone and Email support</p>
            </div>
        </section>
    );
};

export default OffersSection;