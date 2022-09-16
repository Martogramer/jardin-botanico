import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import JardinHeader from "components/Headers/JardinHeader.js";
import JardinDarkFooter from "components/Footers/JardinDarkFooter.js";
import JardinNavbar from "../components/Navbars/JardinNavbar.js";
import FotosJardin from "./index-sections/FotosJardin.js";
import FormularioContacto from "./index-sections/FormularioContacto.js";
import NosotrosHome from "./index-sections/NosotrosHome.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <JardinNavbar />
      <div className="wrapper">
        <JardinHeader />
        <div className="main">
          <NosotrosHome />
          <FotosJardin />
          <FormularioContacto />
          {/* <Examples />  
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <NucleoIcons /> 
          <CompleteExamples /> */}
        </div>
        <JardinDarkFooter />
      </div>
    </>
  );
}

export default Index;
