import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderActionGroup,
  HeaderActions,
  HeaderLinks,
  HeaderLogo,
  HeaderWrapper,
  MenuActions,
} from "./styles";
import Search from "./actions/search";
import Account from "./actions/account";
import Basket from "./actions/basket";
import Menu from "./menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <Menu open={menuOpen}>
        <HeaderLogo>
          <img src="assets/images/logo.svg" alt="Adonis" />
        </HeaderLogo>
        <MenuActions>
          <Menu.Toggle onClick={() => setMenuOpen((menuOpen) => !menuOpen)} />
          <HeaderActionGroup>
            <HeaderLinks>
              <Link to="/">Moisturisers</Link>
              <Link to="/">Make Up</Link>
              <Link to="/">Face Masks</Link>
              <Link to="/">Products For</Link>
            </HeaderLinks>
            <HeaderActions>
              <Search />
              <Account />
              <Basket />
            </HeaderActions>
          </HeaderActionGroup>
        </MenuActions>
      </Menu>
    </HeaderWrapper>
  );
}
