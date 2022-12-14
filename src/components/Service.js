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
                <span className="fas fa-code" />
              </div>
              <div className="name">{t("social_media.media1_titulo")}</div>
              <div className="text">
              {t("social_media.media1")}
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-music" />
              </div>
              <div className="name">{t("social_media.media2_titulo")}</div>
              <div className="text">
              {t("social_media.media2")}
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-ad" />
              </div>
              <div className="name">{t("social_media.media3_titulo")}</div>
              <div className="text">
              {t("social_media.media3")}
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">{t("social_media.media4_titulo")}</div>
              <div className="text">
              {t("social_media.media4")}
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;