import QuoteCard from "../../components/QuoteCard";
import deadend4 from "../../assets/deadend4.jpg";
import setRouterTitle from "../../utils/useRouterTitle";

function App() {
  setRouterTitle("Библиотека Озвучкера");
  return (
    <>
      <h1>Библиотека Озвучкера</h1>
      <QuoteCard
        image={deadend4}
        title="Я Вас категорически приветствую!"
        author="deadend4"
        description="Тут Вы найдете всё, что нужно знать актеру."
        url=""
      />
    </>
  );
}

export default App;
