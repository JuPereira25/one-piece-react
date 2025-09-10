import styles from "../About/about.module.css";
import luffy from "../../assets/icon/luffy-icon.png"

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.line}></div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Sobre</h2>
        <p className={styles.subTitle}>
          O anime One Piece é uma série japonesa de aventura e comédia que
          acompanha Monkey D. Luffy e sua tripulação de piratas em busca do
          lendário tesouro "One Piece", que pode torná-lo o Rei dos Piratas.
          Baseado no popular mangá de Eiichiro Oda, o anime é conhecido por suas
          histórias emocionantes, personagens cativantes, combates épicos e a
          forma como explora temas como amizade, liberdade e justiça.
        </p>
        <h2 className={styles.whatsOnePiece}>
          O que é o One Piece?
        </h2>
        <p>
          O "One Piece" é um tesouro lendário deixado pelo Rei dos Piratas Gold
          Roger, que iniciou a "Grande Era dos Piratas" ao anunciar que quem o
          encontrasse se tornaria o próximo Rei dos Piratas.
        </p>
         <img className={styles.iconLuffy} src={luffy} alt="" />
      </div>
    </div>
  );
}

export default About;