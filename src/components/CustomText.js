import { useTranslation } from "next-i18next";
export const CustomText = () => {
  const { t } = useTranslation("common");
  return (
    <div className="section custom-text" id="section-custom-text">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner"> {t("custom_text.titulo")}</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="single-post-text">
            <p>
              {t("custom_text.descripcionlarga1")}
            </p>
            <p>
            {t("custom_text.descripcionlarga2")}
            </p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default CustomText;