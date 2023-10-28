import { useContext } from "react";
import { AllCardsResume } from "../../components/home/all-cards-resume/AllCardsResume";
import { AuthContext } from "../../context/Auth/AuthContext";

export const ViewHome = () => {
  const { infoUser } = useContext(AuthContext);
  return (
    <main>
      <h2>Bienvenido, {infoUser.name} </h2>
      <br />
      <AllCardsResume />
      <br />
    </main>
  );
};
