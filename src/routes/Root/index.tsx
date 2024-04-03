import styles from "./Root.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  setRouterTitle("Библиотека Озвучкера");
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}
