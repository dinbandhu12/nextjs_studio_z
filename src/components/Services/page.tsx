import Image from "next/image";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.services_section}>
      <div className={styles.services_title}>
        <p>What we do</p>
      </div>
      <div className={styles.services_cards}>
        <div className={styles.services_card_set_1}>
          <div className={styles.services_card_1}>
            <Image
              src="/clients/icon-7.svg"
              alt="services_icon"
              width={60}
              height={60}
              className={styles.services_card_icon}
            />
            <div className={styles.card_content}>
              <h2 className={styles.services_card_title}>Branding</h2>
              <p className={styles.services_card_paragraph}>
                We create unique and memorable branding solutions that reflect
                your brand's personality and values.
              </p>
            </div>
          </div>
          <div className={styles.services_card_2}>
            <Image
              src="/clients/icon-5.svg"
              alt="services_icon"
              width={60}
              height={60}
              className={styles.services_card_icon}
            />
            <div className={styles.card_content}>
              <h2 className={styles.services_card_title}>UI/UX Design</h2>
              <p className={styles.services_card_paragraph}>
                We design user-friendly and visually appealing interfaces that
                enhance user experience and engagement.
              </p>
            </div>
          </div>
        </div>

        <span className={styles.services_card_set_2_seperator}></span>
        <div className={styles.services_card_set_2}>
          <div className={styles.services_card_3}>
            <Image
              src="/clients/icon-2.svg"
              alt="services_icon"
              width={60}
              height={60}
              className={styles.services_card_icon}
            />
            <div className={styles.card_content}>
              <h2 className={styles.services_card_title}>Web Development</h2>
              <p className={styles.services_card_paragraph}>
                We build responsive and efficient websites that deliver
                exceptional user experiences.
              </p>
            </div>
          </div>
          <div className={styles.services_card_4}>
            <Image
              src="/clients/icon-3.svg"
              alt="services_icon"
              width={60}
              height={60}
              className={styles.services_card_icon}
            />
            <div className={styles.card_content}>
              <h2 className={styles.services_card_title}>App Development</h2>
              <p className={styles.services_card_paragraph}>
                We create custom mobile applications tailored to your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
