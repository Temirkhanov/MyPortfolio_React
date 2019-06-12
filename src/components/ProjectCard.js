import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      className="card-container bg-white text-center "
      style={{
        display: "inline-block",
        margin: "4px",
        padding: "0",
        paddingBottom: "0",
        height: "200px",
        width: "250px",
        borderRight: "1px solid black"
      }}
    >
      <div
        className="font-weight-normal "
        style={{
          color: "black",
          paddingBottom: "5px",
          margin: "0",
          textAlign: "center",
          fontSize: "20px",
          height: "30px"
        }}
      >
        {props.projectName}
      </div>

      <p
        className=" d-flex align-items-start flex-column bd-highlight mb-4 font-weight-normal"
        style={{
          whiteSpace: "pre-line",
          color: "black",
          padding: "1%",
          fontSize: "15px",
          marginBottom: "0",
          height: "110px"
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
          width: "200px",
          fontWeight: "normal",
          fontSize: "16px",
          borderRadius: "0",
          height: "30px"
        }}
      >
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
}
