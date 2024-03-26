import { useNavigate } from "react-router-dom";

interface ButtonAProps {
  href: string;
  content: string;
}
export default function ButtonA({ href, content }: ButtonAProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(href);
      }}
    >
      {content}
    </button>
  );
}
