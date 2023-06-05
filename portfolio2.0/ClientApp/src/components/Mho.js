import React, { Component } from 'react';
// import './DawgDays.css';

export class Mho extends Component {
    static displayName = Mho.name;

    render() {

        return (
            <div className="proj">
                <div className="proj-title">Military History Online
                    <div className="contact-underline"></div>
                </div>

                <img src="mho-img.png" alt="mho" className="website-img"></img>
            </div>
        );
    }
}
