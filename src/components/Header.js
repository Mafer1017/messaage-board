import React from "react";
import headerImage from "./../img/lol.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Gamer Boiz</h1>
      <img src={headerImage} alt="A leet hacker." />
      <br></br>
    </React.Fragment>
  );
}

export default Header;