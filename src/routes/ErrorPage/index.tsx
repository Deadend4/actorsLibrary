import styles from "./ErrorPage.module.scss";
import errorPic from "../../assets/error.png";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";
import QuoteCard from "../../components/QuoteCard";

export default function ErrorPage(): JSX.Element {
  setRouterTitle("404 Страница не найдена");
  // const fetchPost = async () => {
  //   await getDocs(collection(firestoreDB, "images"))
  //     .then((querySnapshot) => {
  //       newData = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log(newData);
  //     })
  //     .catch(() => alert("aaaa"));
  // };
  // useEffect(() => {
  //   fetchPost();
  // }, []);
  return (
    <div className={styles.container}>
      <Header />
      <h1>404 Страница не найдена</h1>
      <QuoteCard
        image={errorPic}
        author="Ошибка 404"
        title="Страница не найдена"
        description="Страница, которую Вы ищите не существует или была удалена."
        url="/"
      />
    </div>
  );
}
