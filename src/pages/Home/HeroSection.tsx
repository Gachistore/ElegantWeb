import { Carousel } from 'react-responsive-carousel';
import Hero1 from 'src/assets/images/hero1.png';
import Hero2 from 'src/assets/images/hero2.jpg';
import Hero3 from 'src/assets/images/hero3.jpg';
import ArrowLeft from 'src/assets/images/arrow_left.svg';
import ArrowRight from 'src/assets/images/arrow_right.svg';
import styles from './HeroSection.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
    return (
        <section className='content'>
            <Carousel
                showStatus={false}
                showThumbs={false}
                renderIndicator={renderIndicator}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
                <img className={styles['carousel__img']} src={Hero1} alt='furniture 1' />
                <img className={styles['carousel__img']} src={Hero2} alt='furniture 2' />
                <img className={styles['carousel__img']} src={Hero3} alt='furniture 3' />
            </Carousel>
            <div className={styles['hero__bottom']}>
                <div>
                    <h2 className={styles['hero__heading']}>Simply Unique<span>/</span></h2>
                    <h2 className={styles['hero__heading']}>Simply Better<span>.</span></h2>
                </div>
                <p className={styles['hero__description']}>
                    <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                </p>
            </div>
        </section>
    );
};

const renderIndicator = (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
) => {
    return <li 
                className={`${styles['carousel__dot']} ${isSelected ? styles['carousel__dot_selected'] : ''}`}
                value={index}
                role='button'
                aria-label={`slide imem ${index}`}
                onClick={clickHandler}
            />;
};

const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    return (
        <div
            className={[styles['carousel__arrow-container'], 
                        styles['carousel__arrow-container_left'],
                        hasPrev && styles['carousel__arrow-container_active']].join(' ')}
            onClick={clickHandler}
        >
            <img className={styles['carousel__arrow']} src={ArrowLeft} alt='left' />
        </div>
    )
}

const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
    return (
        <div
            className={[styles['carousel__arrow-container'], 
                        styles['carousel__arrow-container_right'],
                        hasNext && styles['carousel__arrow-container_active']].join(' ')}
            onClick={clickHandler}
        >
            <img className={styles['carousel__arrow']} src={ArrowRight} alt='right' />
        </div>
    )
}

export default HeroSection;