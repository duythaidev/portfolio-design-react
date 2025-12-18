import React from "react";
import "../../styles/About/Testimonials.scss";
import TestimonialsContent from "./TestimonialsContent";
import { useLanguage } from "../../context/LanguageContext";
import { aboutContentEN, aboutContentVI } from "../../data/aboutContent";

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const aboutContent = language === "en" ? aboutContentEN : aboutContentVI;

  return (
    <div className="testimonials-container">
      {aboutContent.testimonialsName &&
        aboutContent.testimonialsName.length > 0 &&
        aboutContent.testimonialsName.map((e, i) => {
          return (
            <TestimonialsContent
              key={i}
              name={e}
              text={aboutContent.testimonialsContent}
            ></TestimonialsContent>
          );
        })}
    </div>
  );
};

export default Testimonials;
