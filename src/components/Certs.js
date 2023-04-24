import { useTranslation } from "next-i18next";
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
              <Cert imagen={"images/cert/apisec.png"} enlace ="https://www.credly.com/badges/6decc09d-8904-4fc2-a66a-1a917f1cebf2/public_url"/>
              <Cert imagen={"images/cert/oscp.png"} enlace ="https://www.credential.net/4fc22f0f-c717-4eed-991d-58c267629fe5"/>
              <Cert imagen={"images/cert/az-900-sinfondo.png"} enlace =""/>
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