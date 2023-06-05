import React, { Component } from 'react';
import './Experience.css';

export class Experience extends Component {
    static displayName = Experience.name;

    render() {

        return (
            <>
                <div className="mywork" id="about">Experience
                    <div className="experience-underline"></div>
                </div>

                <div className="experience-text">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4 border-end">
                                <h4 class="card-title pe-4">Military History Online</h4>
                                <p className="card-bio">full-stack C#/.NET developer</p>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <span class="card-text">
                                        <ul>
                                            <li>
                                                Collaborating on rewriting and modernizing a 24-year-old website with thousands of members, improving performance and
                                                user experience.
                                            </li>
                                            <li>
                                                Successfully migrating an MVC website to ASP.NET Core, utilizing C#, Blazor, and MudBlazor, reducing load times and
                                                enhancing responsiveness.
                                            </li>
                                            <li>
                                                Leveraging SQL and SQL Server Management Studio to optimize queries and efficiently manage an extensive database of
                                                articles, forum posts, and member data.
                                            </li>
                                            <li>
                                                Employing Azure DevOps for version control, continuous integration, and deployment, ensuring streamlined collaboration
                                                and code integration.
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4 border-end">
                                <h4 class="card-title pe-4">The University of Georgia</h4>
                                <p className="card-bio">undergraduate teaching assistant</p>

                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <span class="card-text">
                                        <ul>
                                            <li>
                                                Conducted regular office hours, effectively communicating with and assisting approximately 20 students per week in the
                                                CSCI1302 class (Software Development in Java). Guided students in project completion and debugging techniques, fostering
                                                their problem-solving skills and understanding of course concepts.
                                            </li>
                                            <li>
                                                Assessed and provided comprehensive feedback on quizzes, projects, and exams for over 300 students, ensuring accurate
                                                evaluation and promoting learning opportunities.
                                            </li>
                                            <li>
                                                Administered and actively participated in the Piazza question board, promptly addressing student queries and providing
                                                helpful explanations.
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
