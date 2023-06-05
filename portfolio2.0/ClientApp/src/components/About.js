import React, { Component } from 'react';
import './About.css';

export class About extends Component {
    static displayName = About.name;

    render() {

        return (
            <>
                <div className="mywork" id="about">About
                    <div className="about-underline"></div>

                </div>
                <div className="about-text">
                    Hi! My name is Ashley Williams and I'm a recent graduate from the University of Georgia with a BS in Computer Science. 
                    It was all the way back in 2014 that I joined a forum and started dabbling in HTML and CSS, cultivating my love for web design! 
                    <br /><br />
                    During my time at the University of Georgia, I worked as an Undergraduate Teaching Assistant for the Computer Science department's 
                    Software Development (in Java) class. Now I currently work as a full-stack C#/.NET developer for MilitaryHistoryOnline.com where I'm
                    expanding my knowledge by familiarizing myself with making API calls and using SQL to store and retrieve data. By learning this, I can
                    become even more than a front-end developer and make sure no detail is lost in translation!
                    <br /><br />
                    Here are a few technologies I've been working with recently:
                    <br /><br />
                    <table style={{ fontSize: '15px', margin: '-10px 0px 0px 0px' }}>
                        <tr>
                            <td style={{ padding: '0px 50px 0px 0px' }}>
                                <ul>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        .NET Core
                                    </li>
                                    <li>
                                        Blazor
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        SQL
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Java
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </>
        );
    }
}
