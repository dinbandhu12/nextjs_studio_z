import Image from "next/image";
import Button from "../Button/page";
import styles from "./howwork.module.css";

export default function HowWork() {
  return (
    <section className={styles.howwork_section}>
      <div className={styles.howwork_title}>
        <div className={styles.howwork_top}>
          <p className={styles.howwork_small_text}>How We Work</p>
          <h2 className={styles.howwork_para_text}>
            We help our clients succeed with innovative strategies.
          </h2>
        </div>
        <div className={styles.howwork_icon_sec}>
          <Image
            src="/clients/icon-10.svg"
            alt="howwork_icon"
            width={60}
            height={60}
            className={styles.howwork_icon}
          />
        </div>
      </div>
      <div className={styles.howwork_right}>
        <div className={styles.howwork_right_para_text}>
          <p>
            Through careful analysis, creative thinking, and a deep
            understanding of their goals, we empower businesses to surpass
            expectations and thrive in today's dynamic and competitive
            landscape.
          </p>
        </div>
        <Button label="Our Services" href="/services" />
      </div>
    </section>
  );
}
