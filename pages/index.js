import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills, KnowledgeSkills } from "../src/components/Skills";
import { BlogPost } from "../src/components/BlogPost";
import { About } from "../src/components/About";
import { CustomText } from "../src/components/CustomText";
import { Service } from "../src/components/Service";
import { ResumeSection } from "../src/components/ResumeSection";
import { ContactSection } from "../src/components/ContactSection";
import { IndexPersonal } from "../src/components/IndexPersonal";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export default function Home...


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

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
  const { t } = useTranslation("common");
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
              {t("nombre")} <strong>{t("apellido")}</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
              {t("descarga")} <strong>{t("CV")}</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">{t("navegacion.home")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">{t("navegacion.about")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-skills-code">{t("navegacion.skills")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-services">{t("navegacion.service")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-history">{t("navegacion.resume")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">{t("navegacion.contact")}</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-blog">{t("navegacion.blog")}</a>
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
        {/* Section Contacts Info */}
        <ContactSection />
        {/* Section Blogs */}
        <BlogPost/>
      </div>
    </Layout>
  );
};
export default IndexOnePage;
