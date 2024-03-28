import QuoteCard from "../../components/QuoteCard";
import actorImg from "../../assets/actorsWork.jpg";
import actorsBibleImg from "../../assets/actorsBible.jpg";
import styles from "./ActingBooks.module.scss";
import setRouterTitle from "../../../utils/useRouterTitle";
import Header from "../../components/Header";

export default function BooksPage(): JSX.Element {
  setRouterTitle("Актерское мастерство");
  return (
    <div className={styles.container}>
      <Header />
      <h1>Актерское мастерство</h1>
      <QuoteCard
        image={actorImg}
        name="Константин Станиславский"
        title="Работа актера над собой"
        message="В книге представлены практические советы и подсказки, а также описаны интересные моменты из творческой жизни Станиславского и его личный опыт постановки спектаклей."
        url="/books/acting/actors-work-on-himself"
      />
      <QuoteCard
        image={actorsBibleImg}
        name="Вера Полищук"
        title="Библия актерского мастерства"
        message="Перед вами уникальное пособие для начинающего актера или маститого профессионала, для руководителя театральной студии, абитуриентов и студентов театральных вузов, для практикующих психологов, а также для тех, кто хочет добиться мастерства в общении любого рода: публичных выступлениях, спорах, дискуссиях, лекциях и в каждодневных беседах между людьми.
        Книга, которая поможет на практике освоить опыт профессиональной подготовки под руководством великих режиссеров современности. Уникальные упражнения и авторские тренинги Константина Станиславского, Георгия Товстоногова, Всеволода Мейерхольда и Михаила Чехова - впервые под одной обложкой!"
        url="/books/acting/the-bible-of-acting-polishchuk"
      />
      <QuoteCard />
    </div>
  );
}
