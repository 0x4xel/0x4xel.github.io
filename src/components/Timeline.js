import { Chrono } from "react-chrono";
import items from "../../json/roadmap.json"
import { useTranslation } from "next-i18next";
import { useState, useCallback, useEffect } from 'react';
const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

export const Timeline = () => {
    const { t } = useTranslation("common");
    const isMobile=useMediaQuery(820)

    return (
        <div className="section custom-text" id="section-timeline">
            <div className="content">
                <div className="title">
                    <div className="title_inner">{t("roadmap.titulo")}</div>
                </div>
            <div className="content-box">
                <div class ="ancho100">
                    <Chrono items={items} mode={`${isMobile ? "VERTICAL" : "VERTICAL_ALTERNATING"}`} borderLessCards="true" useReadMore="true" scrollable  cardHeight="400"
                     classNames={{
                        card: 'roadmap-step',
                        cardTitle: 'titulo-tarjeta',
                        cardText: 'texto-tarjeta',
                        cardMedia: "media-tarjeta",
                        title: "fecha-tarjeta",
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
