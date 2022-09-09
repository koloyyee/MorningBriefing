import React from "react";
import "./tag.css";

const PillTag: React.FC<{ props: string }> = (data) => {
  return <p className="pill-tag">{data.props}</p>;
};
export default PillTag;
