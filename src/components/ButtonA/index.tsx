import { Link } from "react-router-dom";
import styles from "./ButtonA.module.scss";
interface ButtonAProps {
  href: string;
  content: JSX.Element | string;
}
export default function ButtonA({ href, content }: ButtonAProps): JSX.Element {
  return (
    <Link to={href} className={styles.button}>
      {content}
    </Link>
  );
}
