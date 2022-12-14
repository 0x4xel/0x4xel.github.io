import { useTranslation } from "next-i18next";
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="footer">
      <div className="copy">
        <p>{t("footer.email")}</p>
        <p>{t("footer.telefono")}</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">{t("footer.sigueme")}</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href={t("contacto.url1")}>
            <span className="icon fab fa-pinterest" />
          </a>
          <a target="_blank" rel="noreferrer" href={t("contacto.url2")}>
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href={t("contacto.url3")}>
            <span className="icon fab fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
