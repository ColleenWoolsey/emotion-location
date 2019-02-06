import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">

             <ul className="nav">
                <li className="nav-title">
                    <h2>What are you feeling?</h2>
                </li>
                {this.props.emotions.map(emotion => (
                <li key={emotion.id} emotion={emotion} {...this.props} className="nav-item">
                    <Link to={`emotions/${emotion.id}`}></Link>
                </li>
                ))}
              </ul>
            
                {/* <ul className="nav nav-pills">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/emotions/1">Emotion 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/emotions/2">Emotion 2</Link>
                    </li>                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/emotions/3">Emotion 3</Link>
                    </li>
                </ul> */}
            </nav>
        )
    }
}

export default NavBar