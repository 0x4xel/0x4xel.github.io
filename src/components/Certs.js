import { useTranslation } from "next-i18next";
import certs from "../../json/certs.json"
export const Certs = () => {
  const { t } = useTranslation("common");
  return (
    <div className="section clients" id="section-certs-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">{t("certs.titulo")}</div>
        </div>
        {/* Certs items */}
        <div className="content-box">
          <div className="clients-items">
          {Object.keys(certs).map((index) => {
                return (
                  <Cert key={index} imagen={certs[index].imagen} enlace={certs[index].enlace}/>
                )})
              }
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};


const Cert = ({imagen, enlace}) => {

  return (
    <div className="clients-col">
      <div className="clients-item">
        <a target="_blank" rel="noreferrer" href={enlace}>
          <img src={imagen} alt="" />
        </a>
      </div>
  </div>
  )

}

export default Certs;