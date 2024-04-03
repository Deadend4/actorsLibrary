import errorPic from "../../assets/error.png";
import setRouterTitle from "../../utils/useRouterTitle";
import QuoteCard from "../../components/QuoteCard";

export default function ErrorPage(): JSX.Element {
  setRouterTitle("404 Страница не найдена");
  return (
    <>
      <h1>404 Страница не найдена</h1>
      <QuoteCard
        image={errorPic}
        author="Ошибка 404"
        title="Страница не найдена"
        description="Страница, которую Вы ищите не существует или была удалена."
        url="/"
      />
    </>
  );
}
