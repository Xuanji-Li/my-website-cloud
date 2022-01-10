import React from "react";
import "./Experience.css";
function Experience({title,smTitle,date,children}) {
  return (
    <div className="content">
      <b className="title">{title}</b>
      <b className="smTitle">{smTitle}</b>
      <p>{date}</p>
      {children}
    </div>
  );
}

export default Experience;
