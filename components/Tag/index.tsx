import React from "react";
import "./style.css";

const PillTag: React.FC<{ props: string }> = (data) => {
  return <p className="pill-tag">{data.props}</p>;
};
export default PillTag;
