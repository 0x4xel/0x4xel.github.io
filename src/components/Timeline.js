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
                    <Chrono items={items} mode="VERTICAL_ALTERNATING" useReadMore="true" scrollable  cardHeight="400"
                     classNames={{
                        card: 'roadmap-step',
                        cardTitle: 'titulo-tarjeta',
                        cardText: 'texto-tarjeta',
                        cardMedia: "media-tarjeta"
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

export default Timeline;
