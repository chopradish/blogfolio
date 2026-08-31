import type { Project } from "../types";
import { Icons } from "./Icons";

interface ProjectCardProps {
  projectDeets: Project;
}

const ProjectCard = ({ projectDeets }: ProjectCardProps) => {
  return (
    <div className="col-span-1">
      <a
        href={projectDeets.link}
        className="flex h-full origin-center flex-col justify-between gap-8 rounded-lg outline  outline-gray-500 hover:outline-gray-900 dark:outline-gray-400 dark:hover:outline-gray-100 p-4 transition-transform"
      >
        <div className="text-sm">{projectDeets.desc}</div>
        <span className="font-semibold text-rose-500 dark:text-rose-400  md:text-2xl">
          {projectDeets.title}
        </span>
      </a>
    </div>
  );
};

type ProjectsProps = {
  featuredProjects: Project[];
  allProjectsUrl: string;
};

export const Projects = ({
  featuredProjects,
  allProjectsUrl,
}: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 items-stretch gap-5">
        {featuredProjects.map((fp) => (
          <ProjectCard key={fp.id} projectDeets={fp} />
        ))}
      </div>
      <a
        href={allProjectsUrl}
        className="text-primary-200 hover:text-primary-100 flex items-center gap-x-1 transition-colors"
      >
        View all Projects
        <span className="">
          <Icons.arrowRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
};
