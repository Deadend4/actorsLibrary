import styles from "./Video.module.scss";

interface VideoProps {
  url: string;
  title: string;
}
export default function Video({ url, title }: VideoProps) {
  return (
    <div className={styles.videoBlock}>
      <p>{title}</p>
      <iframe
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
