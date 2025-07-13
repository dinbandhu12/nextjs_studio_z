import Image from "next/image";
import Button from "../Button/page";
import styles from "./visions.module.css";

export default function Visions() {
  return (
    <div className={styles.visions_section}>
      <div className={styles.visions_left_div}>
        <Image src="/path/to/image.jpg" alt="Vision Image" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.visions_right_div}>
        <div className={styles.right_div_one}>
          <div className={styles.one_num}>
            <span>01</span>
          </div>
          <div className={styles.one_text}>
            <h2>Vision</h2>
            <p>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
          </div>
        </div>
        <div className={styles.right_div_one}>
          <div className={styles.one_num}>
            <span>01</span>
          </div>
          <div className={styles.one_text}>
            <h2>Vision</h2>
            <p>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
          </div>
        </div>
        <div className={styles.right_div_one}>
          <div className={styles.one_num}>
            <span>01</span>
          </div>
          <div className={styles.one_text}>
            <h2>Vision</h2>
            <p>Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations, transforming their dreams into reality and shaping a future worth embracing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
