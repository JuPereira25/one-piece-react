import styles from "./Home.module.css";
import sunny from "../../assets/sunny.png";

function Home() {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.title}>
        <h1 className={styles.titleH1}>
          A Jornada épica de <br />
          <span className={styles.yellow}>ONE PIECE</span> começa <br /> aqui!
        </h1>
        <p class={styles.subtitle}>
          Embarque nesta jornada pelos mares em busca
          <br />
          do tesouro lendário e explore personagens, sagas
          <br />e curiosidades do maior anime de todos os tempos.
        </p>
        <img className={styles.iconSunny} src={sunny} alt="" />
      </div>
    </div>
  );
}

export default Home;
