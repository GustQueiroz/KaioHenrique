import Image1 from "../../imgs/kaio-foto-trofeu.jpg";

import "./about-me.css";

const AboutMe = () => {
  return (
    <div className="aboutMe-body">
      <img className="kaio-imagem" src={Image1} />
      <div className="aboutMe-text">
        <h1 className="aboutMe-h1">Sobre Mim</h1>
        <p className="aboutMe-paragraph">
          Me chamo Kaio Henrique Diogo Domingues, nascido em 22 de março de 2006
          e sou lateral esquerdo do "Futebol Clube do Porto"
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
