import { CardResume } from "../card-resume/CardResume";
import styles from "./AllCardsStyle.module.css";
export const AllCardsResume = () => {
  return (
    <section className={styles.allCard_container}>
      <CardResume category="Ganancias del mes:" infoDetail="$43.650" />
      <CardResume category="Nuevos clientes" infoDetail="+12" />
      <CardResume category="Clientes activos" infoDetail="72" />
      <CardResume
        category="Ganancia promedio por persona"
        infoDetail="$5.500"
      />
    </section>
  );
};
