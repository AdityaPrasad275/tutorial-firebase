import { Link } from "react-router-dom";

const ProjectSummary = ({ id }) => {
  const url = "/project/" + id;
  return ( 
    <Link to={url}>
      <div className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title - {id}</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </Link>
   );
}
 
export default ProjectSummary;