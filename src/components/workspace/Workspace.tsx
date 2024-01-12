import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Split className="split">
      <ProblemDescription />
      <div className="h-screen bg-dark-layer-1 text-white">Code editor will be here..</div>
    </Split>
  );
};

export default Workspace;
