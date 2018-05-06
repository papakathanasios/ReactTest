//$ = jQuery = require('jquery');

//var node_path = 'C:/Users/papak/AppData/Roaming/npm/node_modules/'
//var node_path = 'C:/Users/thanos papakostas/AppData/Roaming/npm/node_modules';
//var jQuery = require('C:/Users/papak/AppData/Roaming/npm/node_modules/jquery');
var React = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/react');
var createReactClass = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/create-react-class');
var ReactDOM = require('C:/Users/papak/AppData/Roaming/npm/node_modules/react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

var App = createReactClass({
    render: function(){
        var Child;
        switch(this.props.route){
            case 'about': Child = About; break;
            case 'authors': Child = Authors; break;
            default: Child = Home;
        }
        return(
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

function render(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('app'))
}
window.addEventListener('hashchange',render);
render();

//ReactDOM.render(<Home />, document.getElementById('app'));
