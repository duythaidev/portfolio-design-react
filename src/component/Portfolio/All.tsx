import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import "../../styles/Portfolio/PortfolioBody.scss";
import myPortfolio from "../../assets/Portfolio.png";

interface PortfolioItem {
  id: number;
  imgsrc: string;
  title: string;
  content: string;
  link: string;
}

const All: React.FC = () => {
  const [image] = useState<PortfolioItem[]>([
    {
      id: 1,
      imgsrc: myPortfolio,
      title: "My Portfolio",
      content: "Use pure css",
      link: "https://x.com",
    },
    {
      id: 2,
      imgsrc: myPortfolio,
      title: "My Portfolio",
      content: "Use pure css",
      link: "https://x.com",
    },
    {
      id: 3,
      imgsrc: myPortfolio,
      title: "My Portfolio",
      content: "Use pure css",
      link: "https://x.com",
    },
    {
      id: 4,
      imgsrc: myPortfolio,
      title: "My Portfolio",
      content: "Use pure css",
      link: "https://x.com",
    },
    {
      id: 5,
      imgsrc: myPortfolio,
      title: "My Portfolio",
      content: "Use pure css",
      link: "https://x.com",
    },
  ]);

  return (
    <div className="portfolio-body-container">
      {image &&
        image.length > 0 &&
        image.map((item) => (
          <PortfolioCard
            key={item.id}
            imgsrc={item.imgsrc}
            title={item.title}
            content={item.content}
            link={item.link}
          />
        ))}
    </div>
  );
};

export default All;
