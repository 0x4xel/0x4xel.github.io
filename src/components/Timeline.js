import { Chrono } from "react-chrono";
import items from "../../json/roadmap.json"
import { useTranslation } from "next-i18next";
export const Timeline = () => {
  const { t } = useTranslation("common");
    return (
        <div className="section custom-text" id="section-timeline">
            <div className="content">
                <div className="title">
                    <div className="title_inner">{t("roadmap.titulo")}</div>
                </div>
            <div className="content-box">
                <div class ="ancho100">
                    <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight="100" scrollable 
                     classNames={{
                        card: 'roadmap-step',
                        cardTitle: 'titulo-tarjeta',
                        cardMedia: 'media-tarjeta',
                        cardSubTitle: 'my-card-subtitle',
                        cardText: 'titulo-tarjeta',
                        controls: 'my-controls',
                        title: 'my-title',
                    }}
                    theme={{
                        primary: 'white',
                        secondary: '#4bffa5',
                        cardBgColor: 'transparent',
                        cardForeColor: 'violet',
                        titleColor: 'white',
                        titleColorActive: 'black',
                      }}
                    />
                </div>
            </div>
            <div className="clear" />
            </div>
        </div>
    )
};

export const TimelineDiv = ({ post: { title, cardTitle,
    media }, index }) => {
    return (
        <div className="roadmap-step" >
            <div className="roadmap-head">
          
            <div className="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li className="disable">Music Writing</li>
                  <li className="disable">Photography</li>
                </ul>
              </div>
            </div>
        </div>
    )
};

export default Timeline;
