import styles from './button.module.css';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
};

export default function Button({
  label,
  onClick,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={styles.button}>
        {label}
      </a>
    );
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
