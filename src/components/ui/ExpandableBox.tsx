"use client";
import React, { ReactNode, useState } from "react";
import styles from "./ExpandableBox.module.scss";

export type ExpandableBoxProps = {
  title: string | ReactNode | (string | ReactNode)[];
  children: string | ReactNode | (string | ReactNode)[];
};

const ExpandableBox = (props: ExpandableBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandable_box} data-augmented-ui="tr-clip">
      <div
        className={styles.expandable_box_title}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{props.title}</h2>
        <p>{isExpanded ? "-" : "+"}</p>
      </div>
      <hr className="w-3/4" />
      {isExpanded && (
        <div className={styles.expandable_box_contents}>{props.children}</div>
      )}
    </div>
  );
};

export default ExpandableBox;
