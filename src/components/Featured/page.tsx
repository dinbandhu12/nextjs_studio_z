"use client";

import Image from "next/image";
import Button from "../Button/page";
import styles from "./featured.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Featured() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // GSAP animation for the title
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1198px)", () => {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: titleRef.current,
          pinSpacing: false,
          scrub: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className={styles.featured_section}>
        <div ref={titleRef} className={styles.featured_title}>
          <div className={styles.featured_title_text}>
            <h2>Featured Work</h2>
            <p>
              Showcasing our standout projects that blend creativity, strategy,
              and cutting-edge design.
            </p>
          </div>
          <Button label="See all work" href="/work" />
        </div>
        <div className={styles.featured_cards_sec}>
          <div className={styles.featured_card_1}>
            <a href="/services" className={styles.featured_card_1_img_container}>
              <Image
                src="/imgs/img_1.png"
                alt="featured_card_1"
                width={800}
                height={800}
                className={styles.featured_card_1_img}
              />
            </a>
            <div className={styles.featured_card_1_content_text}>
              <h2 className={styles.card_title}>Dancing</h2>
              <span className={styles.card_year}>2023</span>
            </div>
          </div>

          <div className={styles.featured_card_bottom}>
            <div className={styles.featured_card_2}>
              <div className={styles.featured_card_2_1_content}>
                <a href="/services" className={styles.featured_card_2_1_img_container}>
                  <Image
                    src="/imgs/img_2.png"
                    alt="featured_card_2"
                    width={800}
                    height={800}
                    className={styles.featured_card_2_1_img}
                  />
                </a>
                <div className={styles.featured_card_2_1_content_text}>
                  <h2 className={styles.card_title}>Branding</h2>
                  <span className={styles.card_year}>2023</span>
                </div>
              </div>
              <div className={styles.featured_card_2_2_content}>
                <a href="/services" className={styles.featured_card_2_2_img_container}>
                  <Image
                    src="/imgs/img_3.png"
                    alt="featured_card_2"
                    width={800}
                    height={800}
                    className={styles.featured_card_2_2_img}
                  />
                </a>
                <div className={styles.featured_card_2_2_content_text}>
                  <h2 className={styles.card_title}>UI/UX Design</h2>
                  <span className={styles.card_year}>2023</span>
                </div>
              </div>
            </div>

            <div className={styles.featured_card_3}>
              <div className={styles.featured_card_3_1_content}>
                <a href="/services" className={styles.featured_card_3_1_img_container}>
                  <Image
                    src="/imgs/img_4.png"
                    alt="featured_card_2"
                    width={800}
                    height={800}
                    className={styles.featured_card_3_1_img}
                  />
                </a>
                <div className={styles.featured_card_3_1_content_text}>
                  <h2 className={styles.card_title}>Web Development</h2>
                  <span className={styles.card_year}>2023</span>
                </div>
              </div>
              <div className={styles.featured_card_3_2_content}>
                <a href="/services" className={styles.featured_card_3_2_img_container}>
                  <Image
                    src="/imgs/img_5.png"
                    alt="featured_card_2"
                    width={800}
                    height={800}
                    className={styles.featured_card_3_2_img}
                  />
                </a>
                <div className={styles.featured_card_3_2_content_text}>
                  <h2 className={styles.card_title}>App Development</h2>
                  <span className={styles.card_year}>2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
