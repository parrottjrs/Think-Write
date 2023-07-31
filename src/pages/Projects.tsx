import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center ">
      <Navbar writing={false} />
      <div className="flex flex-row justify-center">
        <div className="sm-w-1/2 self-center my-10">
          <div className="grid grid-cols-3  place-content-evenly">
            <div className="p-4 bg-gray-800 text-slate-400">Title</div>
            <div className="p-4 bg-gray-800 text-slate-400">Last Edit</div>
            <div className="p-4 bg-gray-800 text-slate-400"></div>
            <ProjectList />
          </div>
        </div>
      </div>
      <CreateButton />
    </div>
  );
}
