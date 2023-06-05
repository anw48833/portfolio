import React from 'react';
import './ProjectCard.css';

export const ProjectCard = ({ title, about, image, link }) => {
    return (
        <a href={link} className="projcard">
            <div class="project-card card" style={{ width: '25rem' }}>
                <img src={image} class="card-img-top project-image" alt={title} />
                <div class="p-2">
                    <h4 className="project-title">{title}</h4>
                    <p className="project-about">{about}</p>
                </div>
            </div>
        </a>
    );
};