import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./header.css";
const Header = () => {
  return (
    <div className="header-body">
      <FaInstagram
        href="https://www.instagram.com/oficialkaiohenrique"
        className="header-icon"
      />
      <h1 className="header-text">Me siga nas redes sociais</h1>
      <FaFacebook
        href="https://web.facebook.com/kaio.henrique.16503"
        className="header-icon"
      />
    </div>
  );
};

export default Header;
