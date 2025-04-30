import Image from 'next/image';
import styles from './hero.module.css';
import Clients from '../Clients/page';

export default function Hero() {
  return (
    <div>
        <div className={styles.hero_section}>
            <div className={styles.left_section}>
                <div className={styles.left_sec_heading}>
                    <h1 className={styles.hero_heading}>We build digital experiences for you.</h1>
                    <p className={styles.hero_paragraph}>We merge creativity and technology to elevate brands, building meaningful digital experiences that last.</p>
                </div>
                <Image src="/icons/pattern1.svg" alt="hero_sec_icon" width={150} height={150} className={styles.hero_sec_icon} />
            </div>
            <div className={styles.right_section} >
                <video autoPlay muted loop className={styles.hero_video} suppressHydrationWarning>
                    <source src="/assets/vid_1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

        <Clients />
    </div>
  );
}