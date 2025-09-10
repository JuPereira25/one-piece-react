import HoverCard from "../../components/HoverCard/HoverCard";
import styles from "./Characters.module.css";

// Importando as imagens
import nicoRobin from "../../assets/nico-robin.png";
import zoro from "../../assets/roronoa-zoro.png";
import luffy from "../../assets/monkey-d-luffy.png";
import sanji from "../../assets/sanji.png";
import nami from "../../assets/nami.png";
import frank from "../../assets/frank.png";
import chopper from "../../assets/tony-tony-chopper.png";
import jinbe from "../../assets/jinbe.png";
import usopp from "../../assets/usopp.png";
import brook from "../../assets/brook.png";

const crewOne = [
  {
    name: "Nico Robin",
    image: nicoRobin,
    description: "Arqueóloga da tripulação do Chapéu de Palha, atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs.",
  },
  {
    name: "Zoro",
    image: zoro,
    description: "É o combatente da tripulação do Chapéu de Palha e um ex-caçador de recompensas.",
  },
  {
    name: "Luffy",
    image: luffy,
    description: "Capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha.",
  },
  {
    name: "Sanji",
    image: sanji,
    description: "Nascido como Vinsmoke Sanji, também é o cozinheiro da tripulação do Chapéu de Palha",
  },
  {
    name: "Nami",
    image: nami,
    description: "Navegadora da tripulação do Chapéu de Palha e uma dos Oficiais Seniores da Grande Frota.",
  },
];

const crewTwo = [
  {
    name: "Frank",
    image: frank,
    description: "Carpinteiro da tripulação do Chapéu de Palha, construtor do Thousand Sunny.",
  },
  {
    name: "Chopper",
    image: chopper,
    description: "Ele é o médico da tripulação dos Chapéu de Palha.",
  },
  {
    name: "Jinbe",
    image: jinbe,
    description: "Timoneiro da tripulação dos Piratas do Chapéu de Palha e mestre em artes marciais.",
  },
  {
    name: "Usopp",
    image: usopp,
    description: "God Usopp é o Atirador da tripulação do Chapéu de Palha e inventor da tripulação.",
  },
  {
    name: "Brook",
    image: brook,
    description: "Músico e espadachim, um esqueleto ressuscitado da tripulação do Chapéu de Palha",
  },
];

function Characters() {
  return (
    <div className={styles.charactersContainer}>
      <div className={styles.line}></div>
      <h2>A Tripulação do Chapéu de Palha</h2>

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

      <div className={styles.crewTwo}>
        {crewTwo.map((character, index) => (
          
          <HoverCard
            key={character.name}
            description={character.description}
            position={index === 0 ? "right" : "bottom"}
          >
            <div className={styles.character}>
              <p>{character.name}</p>
              <img
                src={character.image}
                alt={character.name}
                className={`${styles.crewTwoImage} ${
                  character.name === "Chopper" ? styles.chopper : ""
                }`}
              />
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

export default Characters;