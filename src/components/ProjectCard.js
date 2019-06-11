import React from "react";
import Card from "react-bootstrap/Card";
export default function ProjectCard(props) {
  return (
    <div
      className="card-container bg-white text-center "
      style={{
        display: "inline-block",
        padding: "1px",
        paddingBottom: "0",
        height: "200px",
        width: "200px",
        borderRight: "1px solid black"
      }}
    >
      <div
        className="font-weight-normal "
        style={{
          background: "#2c3e50",
          paddingBottom: "2px",
          margin: "0",
          textAlign: "center",
          fontSize: "17px",
          height: "25px"
        }}
      >
        {props.projectName}
      </div>

      <p
        className="font-weight-normal d-flex align-items-start flex-column bd-highlight mb-4"
        style={{
          whiteSpace: "pre-line",
          color: "black",
          padding: "1%",
          fontSize: "14px",
          marginBottom: "0",
          height: "115px"
        }}
      >
        {props.descr}
      </p>

      <a
        href={props.gurl}
        className="badge badge-dark"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "2%",
          width: "190px",
          fontWeight: "normal",
          fontSize: "16px",
          borderRadius: "0",
          height: "25px"
        }}
      >
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
}
