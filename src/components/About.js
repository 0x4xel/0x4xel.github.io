import { useTranslation } from "next-i18next";

export const About = () => {
  const { t } = useTranslation("common");
  return (
    <div className="section about" id="section-about">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/perfil/color_frente.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            {t("about.descripcion")}
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>{t("about.edad_titulo")}</strong> {t("about.edad")}
              </li>
              <li>
                <strong>{t("about.residencia_titulo")}</strong> {t("about.residencia")}
              </li>
              <li>
                <strong>{t("about.estado_titulo")}</strong> {t("about.estado")}
              </li>
              <li>
                <strong>{t("about.direccion_titulo")}</strong> {t("about.direccion")}
              </li>
              <li>
                <strong>{t("about.telefono_titulo")}</strong> {t("about.telefono")}
              </li>
              <li>
                <strong>{t("about.email_titulo")}</strong> {t("about.email")}
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href={t("about.cv")} className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">{t("about.descarga_cv")}</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;