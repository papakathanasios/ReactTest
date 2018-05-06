"use strict";

var React = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/react');
var createReactClass = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/create-react-class');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorsList');

var AuthorPage = createReactClass({
    getInitialState: function(){
        return{
            authors: []
        }
    },

    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },
    render: function(){
        return(
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;

