import React, { Component } from 'react';
import './Home.css';
import { Projects } from './Projects';
import { About } from './About';
import { Experience } from './Experience';
import { Contact } from './Contact';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div className="page-container" width='100%'>
            <div class="container text-center home-title mx-auto" className="home-title">
                <div class="row">
                    <div class="col text-center home-name">
                        <span>Ashley Williams</span>
                        <span className="bio">software engineer, front end developer</span>
                        <div className="shape"></div>
                        <div className="shape-2"></div>
                    </div>
                    <div class="col mx-auto home-img">
                        <img class="mx-auto" className="ashley-arch" src="/ashley-arch.jpg" alt="Ashley at Samford stadium"></img>
                    </div>
                </div>
            </div>

            <div className="about">
                <About />
            </div>

            <div className="experience">
                <Experience />
            </div>

            <div className="projects">
                <Projects />
            </div>

            <div className="contact">
                <Contact />
            </div>

        </div>
    );
  }
}
