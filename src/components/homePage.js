"use strict";

var React = require('C:/Users/thanos papakostas/AppData/Roaming/npm/node_modules/react');
var createReactClass = require('C:/Users/thanos papakostas/AppData/Roaming/npm/node_modules/create-react-class');


var Home = createReactClass({
    render: function (){
        return(
            <div className = "jumbotron">
                <h1 id="title">Pluralsight Administration</h1>
                <p> React, React Router and flux for ultra responsive web apps!</p>
            </div>
        );
    }
});

module.exports = Home;
