import { useTranslation } from "next-i18next";
export const Service = () => {
  const { t } = useTranslation("common");
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">{t("social_media.titulo")}</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="icon fab fa-github" />
              </div>
              <div className="name">{t("social_media.media1_titulo")}</div>
              <a href ={t("social_media.media1")}>{t("social_media.media1_username")}</a>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="icon fab fa-medium" />
              </div>
              <div className="name">{t("social_media.media2_titulo")}</div>
              <a href ={t("social_media.media2")}>{t("social_media.media2_username")}</a>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="icon fab fa-dashcube" />
              </div>
              <div className="name">{t("social_media.media3_titulo")}</div>
              <a href ={t("social_media.media3")}>{t("social_media.media3_username")}</a>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="icon fab fa-linkedin" />
              </div>
              <div className="name">{t("social_media.media4_titulo")}</div>
              <a href ={t("social_media.media4")}>{t("social_media.media4_username")}</a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;