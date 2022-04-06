import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutNavigation.css'

class AboutNavigation extends Component {

    render() {
        return (
            <div class="About-section">
                <ul class="List-items">
                    <li>
                        <Link to="/education">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="/volunteering">
                            Volunteering
                        </Link>
                    </li>
                    <li>
                        <Link to="/hobbies">
                            Hobbies
                        </Link>
                    </li>
                    <li>
                        <Link to="/orkexperience">
                            Volunteering
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AboutNavigation;