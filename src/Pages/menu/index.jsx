import React from "react";
import Header from "../../components/header";
import { Body, Options } from "./styled";
import Seta from "../../assets/seta-direita.svg";

const Menu = () => {
  return (
    <>
      <Header menu={true} />
      <Body>
        <Options to="/albuns">
          Albums <img src={Seta} alt="seta" />
        </Options>
        <Options to="/postagens">
          Posts <img src={Seta} alt="seta" />
        </Options>
        <Options to="/todos">
          To'Dos <img src={Seta} alt="seta" />
        </Options>
      </Body>
    </>
  );
};

export default Menu;
