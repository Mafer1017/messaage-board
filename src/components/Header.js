import React from "react";
import headerImage from "./../img/lol.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Gamer boys</h1>
      <img src={headerImage} alt="A leet hacker." />
    </React.Fragment>
  );
}

export default Header;