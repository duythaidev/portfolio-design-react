import React from "react";
import chad from "../../assets/Gigachad-Transparent.png";
import "../../styles/About/TestimonialsContent.scss";

interface TestimonialsContentProps {
  name: string;
  text: string[];
}

const TestimonialsContent: React.FC<TestimonialsContentProps> = ({
  name,
  text,
}) => {
  return (
    <div className="testimonials-content">
      <div className="testimonials-title">
        <div className="icon-container flex">
          <img src={chad} alt="chadface" />
        </div>
        <p className="title">{name}</p>
      </div>
      <div className="testimonials-text">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialsContent;
