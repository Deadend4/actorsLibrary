import styles from "./TwistersPage.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import twisterDB from "../../../database/twisters.json";
import { randomTwisterParser } from "../../utils/dataParser";
import { useState } from "react";

export default function TwistersPage(): JSX.Element {
  const [twisters, setTwisters] = useState(randomTwisterParser(twisterDB, 5));

  setRouterTitle("Скороговорки");

  return (
    <>
      <h1>Скороговорки</h1>
      <button
        onClick={() => {
          setTwisters(randomTwisterParser(twisterDB, 5));
        }}
      >
        Обновить список
      </button>

      {twisters}
    </>
  );
}
