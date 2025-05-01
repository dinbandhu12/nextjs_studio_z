import Image from 'next/image';
import styles from './hero.module.css';
import Clients from '../Clients/page';
import Services from '../Services/page';
import Featured from '../Featured/page';
import HowWork from '../Howwork/page';

export default function Hero() {
  return (
    <>
        <section data-scroll-section className={styles.hero_section}>
            <div className={styles.left_section}>
                <Image src="/icons/icon-1.svg" alt="hero_sec_icon" width={80} height={80} className={styles.hero_sec_icon_1} />
                <div className={styles.left_sec_heading}>
                    <h1 className={styles.hero_heading}>We build digital experiences for you.</h1>
                    <p className={styles.hero_paragraph}>We merge creativity and technology to elevate brands, building meaningful digital experiences that last.</p>
                </div>
                <Image src="/icons/icon-1.svg" alt="hero_sec_icon" width={150} height={150} className={styles.hero_sec_icon_2} />
            </div>
            <div className={styles.right_section} >
                <video autoPlay muted loop className={styles.hero_video} suppressHydrationWarning>
                    <source src="/assets/vid_3.mp4" type="video/mp4" />
                </video>
            </div>
        </section>

    <section data-scroll-section>
        <Clients />
    </section>
    <section data-scroll-section>
        <Services />
    </section>
    <section data-scroll-section>
        <Featured />
    </section>
    <section data-scroll-section>
        <HowWork />
    </section>
    </>
  );
}