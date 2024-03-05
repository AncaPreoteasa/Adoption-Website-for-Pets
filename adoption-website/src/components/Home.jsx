import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();

  const goBackToLayout = () => {
    navigateTo("/");
  };

  return (
    <>
      <h1>HOME PAGE</h1>
      <button onClick={goBackToLayout}>Go Back</button>
    </>
  );
}
