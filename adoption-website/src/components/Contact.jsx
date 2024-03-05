import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigateTo = useNavigate();

  const goBackToLayout = () => {
    navigateTo("/");
  };

  return (
    <>
      <h1>CONTACT</h1>
      <button onClick={goBackToLayout}>Go Back</button>
    </>
  );
}
