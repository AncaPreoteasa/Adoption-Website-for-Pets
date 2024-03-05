import { useNavigate } from "react-router-dom";

export default function Adoption() {
  const navigateTo = useNavigate();

  const goBackToLayout = () => {
    navigateTo("/");
  };
  return (
    <>
      <h1>HOW TO ADOPT</h1>
      <button onClick={goBackToLayout}>Go Back</button>
    </>
  );
}
