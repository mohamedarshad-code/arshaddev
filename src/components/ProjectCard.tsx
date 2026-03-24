import React from 'react';
import './ProjectCard.css';
import { Project } from '@/data/site';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <div className="card__content">
        <div className="card__header">
          <span className="card__category">{project.category}</span>
          <h3 className="card__title">{project.name}</h3>
        </div>

        <p className="card__problem"><strong>The challenge:</strong> {project.problem}</p>
        <p className="card__description"><strong>Solution:</strong> {project.solution}</p>

        <div className="card__tech">
            {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
            ))}
        </div>

        <div className="card__buttons">
          {project.demo !== "#" && project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="card__button">
              Live Demo
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" className="card__button secondary">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;