import TypingAnimation from "./TypingAnimation";
import { useTranslation } from "next-i18next";


export const IndexPersonal = () => {
  const { t } = useTranslation("common");
  return (
    
      <div className="section started personal" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div
                className="logo"
                style={{ backgroundImage: "url(images/man.jpg)" }}
              />
              <h1 className="h-title">
                {t("saludo")} <strong>{t("nombre")} {t("apellido")}</strong>, {t("full_stack_developer")}{" "}
                <br />
                {t("pentester_at_ey")}
              </h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default IndexPersonal;