import Avatar from "../Avatar";
import styles from "./QuoteCard.module.scss";

interface QuoteCardProps {
  imageURL: string;
  name: string;
  message: string;
}
export default function QuoteCard({
  imageURL,
  name,
  message,
}: QuoteCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <Avatar image={imageURL} />
      <div className={styles.quoteMessage}>
        <p className={styles.name}>{name}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}
