import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills, DesignSkills, KnowledgeSkills } from "../src/components/Skills";
import { BlogPost } from "../src/components/BlogPost";
import { About } from "../src/components/About";
import { CustomText } from "../src/components/CustomText";
import { Service } from "../src/components/Service";
import { ResumeSection } from "../src/components/ResumeSection";
import { Clients } from "../src/components/Clients";
import { ContactSection } from "../src/components/ContactSection";
import { IndexPersonal } from "../src/components/IndexPersonal";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";

const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="#">
              <span className="mask-lnk">
                Alejandro <strong>Abeyta</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Index*/}
        <IndexPersonal/>
        {/* Section About */}
        <About/>
        {/* Section Custom Text */}
        <CustomText/>
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowledge Skills */}
        <KnowledgeSkills />
        {/* Section Service */}
        <Service/>
         {/* Section Resume */}
        <ResumeSection/> 
        {/* Section Design Skills */}
        <DesignSkills />
        {/* Section Clients */}
        <Clients />
        {/* Section Contacts Info */}
        <ContactSection />
        {/* Section Blogs */}
        <BlogPost/>
      </div>
    </Layout>
  );
};
export default IndexOnePage;
