import React, { Component } from 'react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export class Projects extends Component {
    static displayName = Projects.name;

    render() {
        const projects = [
            {
                id: 1,
                title: 'MilitaryHistoryOnline.com',
                about: 'Working with C#, .NET, SQL.',
                image: 'mho-img.png',
                link: 'http://mho2021-001-site3.btempurl.com/'
            },
            {
                id: 2,
                title: 'Full-stack Website',
                about: 'Used React for the UI, Node.js and Express for routing, and MongoDB for the data storage.',
                image: 'project2.jpg',
                link: 'xxx'
            },
            {
                id: 3,
                title: 'Project 3',
                about: 'This is the third project',
                image: 'project3.jpg',
                link: 'xxx'
            }
            // Add more projects as needed
        ];

        return (
            <>
                <div className="mywork">
                    My Work
                    <div className="projects-underline"></div>
                </div>
                <div class="projects-container grid gap-3">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            about={project.about}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </>
        );
    }
}
