import styles from "./Avatar.module.scss";

interface AvatarProps {
  image: string;
}
export default function Avatar({ image }: AvatarProps): JSX.Element {
  return (
    <>
      <img src={image} alt="аватар" className={styles.avatar} />
    </>
  );
}
