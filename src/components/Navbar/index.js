import { Nav, Ul, NavLin, FontAwesome } from "./styles";
import {
  faHome,
  faMusic,
  faUserTie,
  faImage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const active = {
  fontWeight: "bold",
  color: "#FF4C4C",
};

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <NavLin exact activeStyle={active} to="/">
            <FontAwesome icon={faHome} />
            <span>Home</span>
          </NavLin>
        </li>
        <li>
          <NavLin exact activeStyle={active} to="/letra">
            <FontAwesome icon={faMusic} />
            <span>Letra</span>
          </NavLin>
        </li>
        <li>
          <NavLin exact activeStyle={active} to="/artista">
            <FontAwesome icon={faUserTie} />
            <span>Artista</span>
          </NavLin>
        </li>
        <li>
          <NavLin exact activeStyle={active} to="/album">
            <FontAwesome icon={faImage} />
            <span>Album</span>
          </NavLin>
        </li>
        <li>
          <NavLin exact activeStyle={active} to="/favoritos">
            <FontAwesome icon={faStar} />
            <span>Favoritos</span>
          </NavLin>
        </li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
