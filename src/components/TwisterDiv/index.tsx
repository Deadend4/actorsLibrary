import styles from "./TwisterDiv.module.scss";

interface TwisterDivProps {
  description: string;
}
export default function TwisterDiv({
  description = "[ДАННЫЕ УДАЛЕНЫ]",
}: TwisterDivProps): JSX.Element {
  return (
    <div className={styles.card}>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
