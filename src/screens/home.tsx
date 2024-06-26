import Logo from "../imgs/kaio-logo.webp";
import Clubes from "../imgs/clubes.png";
import LogoGE from "../imgs/ge.webp";
import LogoUOL from "../imgs/uol.png";
import LogoONE from "../imgs/onefutebol.png";
import LogoTimao from "../imgs/timao.png";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-body">
      <img className="kaio-logo" src={Logo} alt="Logo Kaio"></img>

      <div className="teams">
        <h1>Clubes Defendidos:</h1>
        <img src={Clubes} alt="Clubes"></img>
      </div>

      <div className="notices">
        <h1>Noticias:</h1>

        <a
          href="https://ge.globo.com/futebol/times/corinthians/noticia/2024/06/17/corinthians-libera-lateral-campeao-da-copinha-de-graca-para-o-porto.ghtml"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="notice-body">
            <div className="notice-header-ge">
              <img className="notice-logo" src={LogoGE} alt="Logo GE"></img>
            </div>
            <div className="notice-info">
              <img
                className="kaio-notice-image"
                src="https://s2-ge.glbimg.com/XrM8HFABOBnrsm0KPhejJnQPGUM=/0x275:2000x2452/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/T/Z/acoEwFQuWWauA9mHKkTA/53495897626-0a94033a0a-o.jpg"
                alt="Notícia GE"
              ></img>
              <div className="notice-texts">
                <h1 className="notice-h1">
                  Corinthians libera lateral campeão da Copinha de graça para o
                  Porto
                </h1>
                <h3 className="notice-h3">
                  Kaio Henrique, de 18 anos, segue tendo 40% dos direitos
                  econômicos vinculados ao Timão
                </h3>
                <h4 className="notice-h4">Por Redação do ge — São Paulo</h4>
                <h5 className="notice-h5">17/06/2024 18h29</h5>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://www.uol.com.br/esporte/colunas/mercado-da-bola/2024/06/15/corinthians-chega-a-acordo-com-porto-e-negocia-jovem-lateral.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="notice-body">
            <div className="notice-header-uol">
              <img className="notice-logo" src={LogoUOL} alt="Logo UOL"></img>
            </div>
            <div className="notice-info">
              <img
                className="kaio-notice-image"
                src="https://conteudo.imguol.com.br/c/esporte/6b/2024/06/15/kaio-henrique-do-sub-20-do-corinthians-esta-se-transferindo-para-o-porto-1718456687507_v2_360x480.jpg.webp"
                alt="Notícia UOL"
              ></img>
              <div className="notice-texts">
                <h1 className="notice-h1">
                  Corinthians chega a acordo com o Porto e negocia jovem lateral
                </h1>
                <h3 className="notice-h3">
                  Kaio Henrique assinará um contrato de quatro temporadas com o
                  Porto, e será incorporado inicialmente na equipe B
                </h3>
                <h4 className="notice-h4">
                  André Hernan e Felipe Silva Colunista do UOL
                </h4>
                <h5 className="notice-h5">15/06/2024 10h07</h5>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://onefootball.com/pt-br/noticias/lateral-esquerdo-brasileiro-e-reforco-do-fc-porto-39633842"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="notice-body">
            <div className="notice-header-one">
              <img
                className="notice-logo-one"
                src={LogoONE}
                alt="Logo ONE"
              ></img>
            </div>
            <div className="notice-info">
              <img
                className="kaio-notice-image"
                src="https://image-service.onefootball.com/transform?w=840&h=630&dpr=2&image=https%3A%2F%2Fi0.wp.com%2Fwww.dominiodebola.com%2Fwp-content%2Fuploads%2F2024%2F06%2Fkaio-henrique-fc-porto.jpg%3Ffit%3D675%252C450%26ssl%3D1"
                alt="Notícia ONE"
              ></img>
              <div className="notice-texts">
                <h1 className="notice-h1">
                  Lateral Esquerdo Brasileiro é Reforço do FC Porto
                </h1>
                <h3 className="notice-h3">
                  O FC Porto garantiu a contratação do jovem lateral-esquerdo
                  brasileiro Kaio Henrique, de 18 anos, que deixa o Corinthians
                  para se juntar à formação azul e branca. A informação foi
                  confirmada pelo diário UOL Esporte.
                </h3>
                <h4 className="notice-h4">DomíniodeBola</h4>
                <h5 className="notice-h5">16 de junho de 2024</h5>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://www.meutimao.com.br/noticias-do-corinthians/480188/campeao-da-copinha-se-despede-do-corinthians-apos-saida-de-graca-a-gigante-portugues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="notice-body">
            <div className="notice-header-timao">
              <img
                className="notice-logo-timao"
                src={LogoTimao}
                alt="Logo Timão"
              ></img>
            </div>
            <div className="notice-info">
              <img
                className="kaio-notice-image"
                src="https://www.meutimao.com.br/fotos-do-corinthians/w941/2023/09/20/kaio_em_acao_na_partida_contra_o_santos_a0a9.jpg"
                alt="Notícia Timão"
              ></img>
              <div className="notice-texts">
                <h1 className="notice-h1">
                  Campeão da Copinha se despede do Corinthians após saída de
                  graça a gigante português
                </h1>
                <h3 className="notice-h3">
                  Kaio Henrique, campeão da Copinha nesta temporada, se despediu
                  do Corinthians na manhã desta quarta-feira. O lateral-esquerdo
                  nascido em 2006 está a caminho do Porto, de Portugal
                </h3>
                <h4 className="notice-h4">POR: MEU TIMÃO</h4>
                <h5 className="notice-h5">26 de Junho de 2024 às 14:33</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
