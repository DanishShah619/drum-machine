import React from "react";

interface DisplayProps {
  currentSound: string;
}

const Display: React.FC<DisplayProps> = ({ currentSound }) => {
  return <div id="display">{currentSound}</div>;
};

export default Display;
