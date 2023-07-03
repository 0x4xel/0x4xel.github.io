import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";
import { useTranslation } from "next-i18next";
import wheels from "../../json/wheels.json"

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export const CodingSkills = () => {
  const { t } = useTranslation("common");
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">{t("coding_skills.titulo")}</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
              {Object.keys(wheels).map((index) => {
                return (
                  <Rueda key={index} rueda={wheels[index].nombre} imagen_rueda={wheels[index].imagen} clase_rueda={wheels[index].clase} porcentaje_rueda={wheels[index].porcentaje}/>
                )})
              }
          </ul>
        </div>
      </div>
    </div>
  );
};



const Rueda = ({rueda,imagen_rueda, clase_rueda,porcentaje_rueda}) => {

  return (
    <li>
    <div className="name rueda">
      <img src={imagen_rueda} alt=""/>
      <p>{rueda}</p>
    </div>
    <div className={clase_rueda}>
      {" "}
      {/* p90 = 90% circle fill color */}
      <div className="percentage">
        <span className="percent">{porcentaje_rueda}</span>
      </div>
      <span>{porcentaje_rueda}</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  </li>
  )

}

export const KnowledgeSkills = () => {
  const { t } = useTranslation("common");

  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">{t("knowledge_skills.titulo")}</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">{t("knowledge_skills.knowledge1")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge2")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge3")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge4")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge5")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge6")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge7")}</div>
            </li>
            <li>
              <div className="name">{t("knowledge_skills.knowledge8")}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
