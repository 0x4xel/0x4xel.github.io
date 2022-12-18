export const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Certificaciones obtenidas</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
              <Cert imagen={"images/cert/oscp.png"} enlace ="#"/>
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

export default Clients;