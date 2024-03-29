/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import './style.css'
function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/paisajeader.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className=" logo-jardin"
              src={require("assets/img/casual.png")}
            ></img>
            <h1 className="h1-seo">Jardín Botánico</h1>
            <h3>Paisajísmo para espacios reducidos, jardínes verticales y soluciones de patio para tu hogar.</h3>
          </div>
          
          
          <h6 className="category category-absolute">
          Ilustración por <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> en <a href="https://icons8.com/illustrations">Ouch!</a>
            . Coded by {" "}
            <a
              href="#"
              target="_blank"
            > 
              <img
                alt="..."
                className="teles-logo"
                src={require("assets/img/vytuzp.jpg")}
              ></img>
            </a>
            telescopiens.
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
