import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
    static displayName = Contact.name;

    render() {

        return (
            <>
                <div className="mywork">Contact
                    <div className="contact-underline"></div>
                </div>

                <div className="contact-text">
                    <a href="mailto:ashleynwilliams422@gmail.com">ashleynwilliams422@gmail.com</a>
                    <br /><br />
                    <a href="https://www.linkedin.com/in/ashley-williams-426142206/">LinkedIn</a>
                    <br />
                    <a href="https://github.com/anw48833">Github</a>
                </div>
            </>
        );
    }
}
