"use strict";

//var node_path = 'C:/Users/papak/AppData/Roaming/npm/node_modules/'
var React = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/react');
var createReactClass = require('C:/Users/papak/AppData/Roaming/npm/node_modules/create-react-class');


var Header = createReactClass({
    render: function (){
        return(
            <nav className = "navbar navbar-default">
                <a href="/" className="navbar-brand">
                    <img src="images/pluralsight-logo.png" />
                </a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#authors">Authors</a></li>
                    <li><a href="/#about">About</a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Header;
