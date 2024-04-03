import books from "../../database/books.json";
import videos from "../../database/videos.json";

export function getCategory(id: string): string {
  switch (id) {
    case "acting":
      return "Актерское мастерство";
    case "voice-prod":
      return "Постановка голоса";
    case "sound-prod":
      return "Звукорежиссура";
    case "translation":
      return "Перевод";
    case "articulation":
      return "Артикуляция";
    default:
      return "";
  }
}
export function getCategories(id: string): string {
  switch (id) {
    case "books":
      return books;
    case "videos":
      return videos;
    default:
      return videos;
  }
}
