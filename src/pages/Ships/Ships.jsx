import styles from "../Ships/Ships.module.css"
import HoverCard from "../../components/HoverCard/HoverCard";


// Importando as imagens
import goingMerry from "../../assets/going-merry.png"
import thousandSunny from "../../assets/thousand-sunny.png"
import zeus from "../../assets/zeus.png"

const crewOne = [
  {
    name: "Going merry",
    image: goingMerry,
    description: "foi o primeiro navio de tamanho real de propriedade dos Piratas do Chapéu de Palha , uma caravela que serviu como seu principal transporte através do East Blue e da Grand Line até Water 7.",
  },
  {
    name: "Thousand Sunny",
    image: thousandSunny,
    description: "atual navio dos Piratas do Chapéu de Palha , serviu como seu principal meio de transporte na maior parte da Grand Line , desde Water 7 até o Novo Mundo.",
  },
  {
    name: "Zeus",
    image: zeus,
    description: "é um homie que é fundido com a feitiçaria Clima-Tact de Nami. Antes de se fundir com o Clima-Tact, ele era propriedade de Big Mom, que o invocava de sua mão esquerda",
  },
];

function Ships() {
  return (
    <div className={styles.shipsContainer}>
      <div className={styles.line}></div>
      <h2>Navios e Companheiros</h2>

      <div className={styles.crew}>
        {crewOne.map((character, index) => (
          
          <HoverCard
            key={character.name}
            description={character.description}
            position={index % 2 === 0 ? "bottom" : "top"}
          >
            <div className={styles.character}>
              <p>{character.name}</p>
              <img
                src={character.image}
                alt={character.name}
                className={styles.crewImage}
              />
            </div>
          </HoverCard>
        ))}
      </div>
      </div>
  );
}

export default Ships; 