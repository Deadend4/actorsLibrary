import QuoteCard from "../../components/QuoteCard";
import deadend4 from "../../assets/deadend4.jpg";
import ButtonA from "../../components/ButtonA";
import styles from "./Twisters.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";

export default function Twisters(): JSX.Element {
  setRouterTitle("Скороговорки");
  return (
    <div className={styles.container}>
      <ButtonA href="/" content="На главную" />
      <QuoteCard
        imageURL={deadend4}
        name="deadend4"
        message="Скоро будут тут скороговорки."
      />
    </div>
  );
}
