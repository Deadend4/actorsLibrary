import QuoteCard from "../../components/QuoteCard";
import deadend4 from "../../assets/deadend4.jpg";
import ButtonA from "../../components/ButtonA";
import styles from "./Twisters.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";

export default function Twisters(): JSX.Element {
  setRouterTitle("Скороговорки");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Скороговорки</h1>
      <QuoteCard
        image={deadend4}
        name="deadend4"
        message="Скоро будут тут скороговорки."
      />
    </div>
  );
}
