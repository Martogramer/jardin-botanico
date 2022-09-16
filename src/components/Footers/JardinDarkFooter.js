/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/index"
              >
                JardínBotánico
              </a>
            </li>
            <li>
              <a
                href="/landing-page"
              >
                About Us
              </a>
            </li>
            <li>
              <a
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#"
          >
            telescopiens
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
