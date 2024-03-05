import { useNavigate } from "react-router-dom";

export default function Articles() {
  const navigateTo = useNavigate();

  const goBackToLayout = () => {
    navigateTo("/");
  };
  return (
    <>
      <h1>ARTICLES</h1>
      <button onClick={goBackToLayout}>Go Back</button>
    </>
  );
}
