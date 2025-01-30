import React from "react";
import {
  FaSoundcloud,
  FaYoutube,
  FaSpotify,
  FaDeezer,
  FaApple,
} from "react-icons/fa";
import styles from "./imgHoverBtnLinks.module.scss";
import Image from "next/image";

export interface ImgBtnProps {
  src: string;
  alt: string;
}

export interface LinksProps {
  soundcloud: string;
  youtube: string;
  spotify: string;
  deezer: string;
  apple: string;
}

export interface ImgHoverBtnLinksProps {
  title: string;
  image: ImgBtnProps;
  links: LinksProps;
}

const ImgHoverBtnLinks = (props: ImgHoverBtnLinksProps) => {
  return (
    <div className={styles.img_hover_btn_container}>
      <Image
        src={`${props.image.src}`}
        alt={props.image.alt}
        width={256}
        height={256}
      />
      <div className={styles.img_hover_btn_container + " " + styles.text}>
        <p>{props.title}</p>
        <hr />
        <div
          className={
            styles.img_hover_btn_container +
            " " +
            styles.text +
            " " +
            styles.links_container
          }
        >
          <a
            href={props.links.soundcloud}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-4xl text-orange-600"
          >
            <FaSoundcloud />
          </a>
          <a
            href={props.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-4xl text-red-600"
          >
            <FaYoutube />
          </a>
          <a
            href={props.links.spotify}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-4xl text-green-700"
          >
            <FaSpotify />
          </a>
          <a
            href={props.links.deezer}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-4xl text-dark-100"
          >
            <FaDeezer />
          </a>
          <a
            href={props.links.apple}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-4xl text-white"
          >
            <FaApple />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgHoverBtnLinks;
