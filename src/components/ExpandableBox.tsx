import React, { useState } from "react";

export type ExpandableBoxProps = {
  title: string | JSX.Element | (string | JSX.Element)[];
  children: string | JSX.Element | (string | JSX.Element)[];
};

const ExpandableBox = (props: ExpandableBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable_box" data-augmented-ui="tr-clip">
      <div
        className="expandable_box_title"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{props.title}</h2>
        <p>{isExpanded ? "-" : "+"}</p>
      </div>
      <hr className="w-3/4" />
      {isExpanded && (
        <div className="expandable_box_contents">{props.children}</div>
      )}
    </div>
  );
};

export default ExpandableBox;
