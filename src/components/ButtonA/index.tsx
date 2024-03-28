import { useNavigate } from "react-router-dom";
import styles from "./ButtonA.module.scss";
interface ButtonAProps {
  href: string;
  content: JSX.Element | string;
}
export default function ButtonA({ href, content }: ButtonAProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(href);
      }}
      className={styles.button}
    >
      {content}
    </button>
  );
}
