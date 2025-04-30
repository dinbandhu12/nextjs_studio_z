import styles from "./clients.module.css";
import Image from "next/image";

const clientLogos = [
  { id: 1, src: "/client-logos/logo1.svg", alt: "Vision Studio" },
  { id: 2, src: "/client-logos/logo2.svg", alt: "Abstract" },
  { id: 3, src: "/client-logos/logo3.svg", alt: "In Motion" },
  { id: 4, src: "/client-logos/logo4.svg", alt: "Super Food" },
  { id: 5, src: "/client-logos/logo5.svg", alt: "Creative Studio" },
  { id: 6, src: "/client-logos/logo6.svg", alt: "Innovation" },
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
                width={150}
                height={60}
                className={styles.logo}
              />
            </div>
          ))}
          {/* Duplicate set of logos for seamless loop */}
          {clientLogos.map((logo) => (
            <div key={`${logo.id}-duplicate`} className={styles.slide}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}