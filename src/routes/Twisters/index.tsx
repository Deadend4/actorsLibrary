import styles from "./Twisters.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import twisterDB from "../../../database/twisters.json";
import { randomTwisterParser } from "../../utils/dataParser";
import { useState } from "react";

export default function Twisters(): JSX.Element {
  const [twisters, setTwisters] = useState(randomTwisterParser(twisterDB, 5));

  setRouterTitle("Скороговорки");

  return (
    <div className={styles.container}>
      <Header />
      <h1>Скороговорки</h1>
      <button
        onClick={() => {
          setTwisters(randomTwisterParser(twisterDB, 5));
        }}
      >
        Обновить список
      </button>

      {twisters}
    </div>
  );
}
