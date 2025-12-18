import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faCamera,
  faLaptopCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export interface AboutContentData {
  title: string;
  header: string[];
  testimonialsName: string[];
  testimonialsContent: string[];
  doingText: Array<{
    id: number;
    iconName: IconProp;
    title: string;
    text: string;
  }>;
}

export const aboutContentEN: AboutContentData = {
  title: "About Me",
  header: ["What I'm doing", "Testimonials", "Clients"],
  testimonialsName: ["Jojo", "Kzek", "Jessica Chemistry"],
  testimonialsContent: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis.",
  ],
  doingText: [
    {
      id: 1,
      iconName: faFigma as IconProp,
      title: "Web Design",
      text: "...@gmail.com",
    },
    {
      id: 2,
      iconName: faLaptopCode,
      title: "Web development",
      text: "Web...",
    },
    {
      id: 3,
      iconName: faMobileScreenButton,
      title: "Mobile Apps",
      text: "app...",
    },
    {
      id: 4,
      iconName: faCamera,
      title: "Photography",
      text: "picture...",
    },
  ],
};

export const aboutContentVI: AboutContentData = {
  title: "Về Tôi",
  header: ["Những gì tôi đang làm", "Nhận xét", "Khách hàng"],
  testimonialsName: ["Jojo", "Kzek", "Jessica Chemistry"],
  testimonialsContent: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis.",
  ],
  doingText: [
    {
      id: 1,
      iconName: faFigma as IconProp,
      title: "Thiết kế Web",
      text: "...@gmail.com",
    },
    {
      id: 2,
      iconName: faLaptopCode as IconProp,
      title: "Phát triển Web",
      text: "Web...",
    },
    {
      id: 3,
      iconName: faMobileScreenButton as IconProp,
      title: "Ứng dụng Di động",
      text: "app...",
    },
    {
      id: 4,
      iconName: faCamera as IconProp,
      title: "Nhiếp ảnh",
      text: "hình ảnh...",
    },
  ],
};
