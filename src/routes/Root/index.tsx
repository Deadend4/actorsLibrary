import styles from "./Root.module.scss";
import setRouterTitle from "../../utils/useRouterTitle";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  setRouterTitle("Библиотека Озвучкера");
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
