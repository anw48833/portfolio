import React from 'react';
import './ProjectCard.css';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, about, image, portfolioLink }) => {
    return (
        <>
            <NavLink tag={Link} className="text-dark projcard" to={portfolioLink} >
                <div class="project-card card" style={{ width: '25rem' }}>
                    <img src={image} class="card-img-top project-image" alt={title} />
                    <div class="p-2">
                        <h4 className="project-title">{title}</h4>
                        <p className="project-about">{about}</p>
                    </div>
                </div>
        </NavLink>
        </>
    );
};