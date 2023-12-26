import { useContext } from "react";
import { AllCardsResume } from "../../components/home/all-cards-resume/AllCardsResume";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ResumeHomeTable } from "../../components/home/table/TableHomeResume";

export const ViewHome = () => {
  const { infoUser } = useContext(AuthContext);
  return (
    <main>
      <h2>Bienvenido, {infoUser?.email} </h2>
      <br />
      <AllCardsResume />
      <br />
      <ResumeHomeTable />
    </main>
  );
};
