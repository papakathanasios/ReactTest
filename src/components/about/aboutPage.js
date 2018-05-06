"use strict";

var React = require('C:/Users/thanos papakostas/AppData/Roaming/npm/node_modules/react');
var createReactClass = require('C:/Users/thanos papakostas/AppData/Roaming/npm/node_modules/create-react-class');


var About = createReactClass({
    render: function (){
        return(
            <div>
                <h1>About</h1>
                <p>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
