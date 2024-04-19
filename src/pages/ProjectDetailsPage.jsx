import { useParams } from "react-router-dom";

function ProjectDetailsPage({ projects }) {
  const { projectID } = useParams();
  //   const currentProject = projects.filter(
  //     (project) => project._id === projectID
  //   );
  const currentProject = projects.find((project) => project._id === projectID);
  const { description, name, technologies, year } = currentProject;
  return (
    <div>
      {/* {currentProject.name}
    {currentProject.description}
    {currentProject.technologies}
    {currentProject.year} */}
      {name}
      {description}
      {technologies}
      {year}
    </div>
  );
}

export default ProjectDetailsPage;
