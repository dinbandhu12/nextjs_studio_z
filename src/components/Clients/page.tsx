import styles from "./clients.module.css";
import Image from "next/image";

const clientLogos = [
  { id: 1, src: "/clients/icon-10.svg", alt: "Vision Studio" },
  { id: 2, src: "/clients/icon-9.svg", alt: "Abstract" },
  { id: 3, src: "/clients/icon-8.svg", alt: "In Motion" },
  { id: 4, src: "/clients/icon-7.svg", alt: "Super Food" },
  { id: 5, src: "/clients/icon-6.svg", alt: "Creative Studio" },
  { id: 6, src: "/clients/icon-5.svg", alt: "Innovation" },
  { id: 7, src: "/clients/icon-4.svg", alt: "Innovation" },
  { id: 8, src: "/clients/icon-3.svg", alt: "Innovation" },
  { id: 9, src: "/clients/icon-2.svg", alt: "Innovation" },
  { id: 10, src: "/clients/icon-1.svg", alt: "Innovation" },
];

export default function Clients() {
  return (
    <div className={styles.clients_container}>
      <div className={styles.client_title}>
        <h2 className={styles.title}>OUR CLIENTS</h2>
        <span className={styles.client_title_seperator}></span>
      </div>
      
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {/* First set of logos */}
          {clientLogos.map((logo) => (
            <div key={logo.id} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className={styles.client_logo}
              />
            </div>
          ))}
          {/* Duplicate set of logos for seamless loop */}
          {clientLogos.map((logo) => (
            <div key={`${logo.id}-duplicate`} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className={styles.client_logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}