import { useState } from "react";
import "./style.css";

const MobileMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    const header = document.getElementsByClassName("nav");
    if (!isOpen) {
      header[0].style.display = "block";
      setIsOpen(true);
    } else {
      header[0].style.display = "none";
      setIsOpen(false);
    }
  };

  return (
    <button className="drawer-button" onClick={handleDrawer}>
      {isOpen ? "x" : "burger"}
    </button>
  );
};

export default MobileMenuBtn;
