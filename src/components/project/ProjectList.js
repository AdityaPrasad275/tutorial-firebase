import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return ( 
    <div className="project-list section ">
      <ProjectSummary id="1" />
      <ProjectSummary id="2" />
      <ProjectSummary id="3" />
    </div>
   );
}
 
export default ProjectList;