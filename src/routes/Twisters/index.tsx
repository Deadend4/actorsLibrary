import styles from "./Twisters.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import TwisterDiv from "../../components/TwisterDiv";

export default function Twisters(): JSX.Element {
  setRouterTitle("Скороговорки");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Скороговорки</h1>
      <TwisterDiv description={"Интервьюер интервента интервьюировал."} />
      <TwisterDiv
        description={`Скороговорун скороговорил скоровыговаривал,
        Что всех скороговорок не перескороговоришь не перескоровыговариваешь,
        Но, заскороговорившись, выскороговорил,
        Что все скороговорки перескороговоришь, да не перескоровыговариваешь.`}
      />
      <TwisterDiv
        description={"И прыгают скороговорки, как караси на сковородке."}
      />
    </div>
  );
}
