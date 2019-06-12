import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projects " style={{ height: "100%" }}>
      <Container
        style={{
          float: "left",
          maxWidth: "100%",
          height: "100%",
          background: "none"
        }}
      >
        <Row className="scroll-row ">
          <div className="scroll-container " style={{ height: "100%" }}>
            <div
              className="display-4"
              style={{
                float: "left",
                padding: "1%",
                marginTop: "60px",
                fontSize: "3rem",
                width: "120px"
              }}
            >
              Web
            </div>
            <ProjectCard
              projectName="Social Geeking"
              descr="Network for programmers using MERN stack. Full user registration and authentication. Gets repositories from Github. CRUD functionality."
              gurl="https://github.com/Temirkhanov/SocialGeeking"
            />
            <ProjectCard
              projectName="Item Catalog"
              descr="Flask app that provides a list of items within categories. Google SignIn and authentication. Persistent data storage to create a RESTful web app with CRUD."
              gurl="https://github.com/Temirkhanov/ItemCatalog"
            />
            <ProjectCard
              projectName="Log Analysis"
              descr="A reporting tool that prints out reports based on the data in the given database. This reporting tool is a Python program using the psycopg2 module."
              gurl="https://github.com/Temirkhanov/LogAnalysis"
            />
            <ProjectCard
              projectName="Linux Server Conf."
              descr="Install and configure an Apache HTTP Server and PostgreSQL database server. Basic Python WSGI application that can query a database."
              gurl="https://github.com/Temirkhanov/LinuxServerConfiguration"
            />

            <ProjectCard
              projectName="React Portfolio"
              descr="My first JavaScript project. Web Portfolio written in JavaScript using React and Bootstrap."
              gurl="https://github.com/Temirkhanov/MyPortfolio_React"
            />
            <ProjectCard
              projectName="Basic Web Portfolio"
              descr="My first website. I chose to use only HTML and CSS to learn the basics of it."
              gurl="https://github.com/Temirkhanov/web_portfolio"
            />
          </div>
        </Row>
        <Row
          col={12}
          className="scroll-row scrollbar square scrollbar-lady-lips thin"
        >
          <div className="scroll-container ">
            <div
              className="display-4"
              style={{
                float: "left",
                padding: "1%",
                marginTop: "60px",
                fontSize: "3rem",
                width: "120px"
              }}
            >
              Java
            </div>
            <ProjectCard
              projectName="Huffman Coding"
              descr="Constructred Huffman ordered linked list using insertion sort, Huffman binary tree and Huffman coding scheme. Traversed the Huffman binary tree."
              gurl="https://github.com/Temirkhanov/Algorithms_JAVA/tree/master/HuffmanCoding"
            />
            <ProjectCard
              projectName="Threads Synchronization"
              descr="This project was part of Distributed Systems class in college. Using monitors constructed synchroinization that allows threads to have both mutual exclusion and the ability to wait."
              gurl="https://github.com/Temirkhanov/Algorithms_JAVA/tree/master/Monitor_MultiThread"
            />
            <ProjectCard
              projectName="Dependency Scheduling"
              descr="Partial Ordering and dependancy graph to solve a scheduling problem. Takes in a directed graph and constructs a schedule table based on the given dependency of nodes in the graph."
              gurl="https://github.com/Temirkhanov/Algorithms_JAVA/tree/master/PartialOrdering_Scheduling"
            />
            <ProjectCard
              projectName="Heap Sort"
              descr="Implemented Heap Sort sased on 1D implementation of Partial Order Binary Trees/Priority Queue."
              gurl="https://github.com/Temirkhanov/Algorithms_JAVA/tree/master/HeapSort"
            />
          </div>
        </Row>
        <Row col={12} className="scroll-row">
          <div className="scroll-container">
            <div
              className="display-4"
              style={{
                float: "left",
                padding: "1%",
                marginTop: "60px",
                fontSize: "3rem",
                width: "120px"
              }}
            >
              C++
            </div>
            <ProjectCard
              projectName="K-Means Clustering"
              descr="Implemented unsupervised learning algorithm that partitions data set into k clusters in which each point gets labeled to the cluster with the nearest mean."
              gurl="https://github.com/Temirkhanov/Algorithms_CPP/blob/master/K-Clustering.cpp"
            />
            <ProjectCard
              projectName="Dijkstra’s Shortest Path"
              descr="Given a directed graph, and the source node, programm finds shortest path from that node to every other in the graph."
              gurl="https://github.com/Temirkhanov/Algorithms_CPP/blob/master/Dijkstra_SSS.cpp"
            />
            <ProjectCard
              projectName="Radix Sort"
              descr="Integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits."
              gurl="https://github.com/Temirkhanov/Algorithms_CPP/blob/master/RadixSort.cpp"
            />
            <ProjectCard
              projectName="Huffman Coding."
              descr="Constructred Huffman ordered linked list using insertion sort, Huffman binary tree and Huffman coding scheme. Traversed the Huffman binary tree."
              gurl="https://github.com/Temirkhanov/Algorithms_CPP/blob/master/HuffmanCoding.cpp"
            />
            <ProjectCard
              projectName="PO, Scheduling"
              descr="Partial Ordering and dependancy graph to solve a scheduling problem. Takes in a directed graph and constructs a schedule table based on the given dependency of nodes in the graph."
              gurl="https://github.com/Temirkhanov/Algorithms_CPP/blob/master/PartialOrdering_Scheduling.cpp"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
