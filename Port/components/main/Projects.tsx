import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/common.jpeg"
          title="College Opportunity Initiative "
          description="A Non profit website focused on teaching students about college admissions. Includes an activities catalog, a road map etc"
        />
        <ProjectCard
          src="/threads.jpeg"
          title="Threads Social Media Clone"
          description="Developed the website version of threads social media app. Included both frontend and backend functionality "
        />
        <ProjectCard
          src="/Unknown.jpeg"
          title="Coursera Clone: Learning Mangement System"
          description="Developed a LMS that allows the creation of courses, a payment system powered by stripe, and a faboulous front and backend"
        />
      </div>
    </div>
  );
};

export default Projects;
