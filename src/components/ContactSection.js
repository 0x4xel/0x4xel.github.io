import { Fragment } from "react";
import { useTranslation } from "next-i18next";

export const ContactSection = () => {
  const { t } = useTranslation("common");
  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">{t("contacto.titulo")}</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">{t("contacto.telefono_titulo")}</div>
                <div className="text">{t("contacto.telefono")}</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">{t("contacto.email_titulo")}</div>
                <div className="text">
                  <a href={t("contacto.mailtoemail")}>
                  {t("contacto.email")}
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">{t("contacto.direccion_titulo")}</div>
                <div className="text">{t("contacto.direccion")}</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">{t("contacto.estado_titulo")}</div>
                <div className="text">{t("contacto.estado")}</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactSection;