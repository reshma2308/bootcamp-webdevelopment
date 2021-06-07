import React from "react";
var curryr = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>copyright @ {curryr}</p>
    </footer>
  );
}
export default Footer;
