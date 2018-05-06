"use strict";

var React = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/react');
var createReactClass = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/create-react-class');
var AuthorApi = require('../../api/authorApi');

var Authors = createReactClass({
    getInitialState: function(){
        return{
            authors: []
        }
    },

    componentWillMount: function(){
        this.setState({authors: AuthorApi.getAllAuthors()});
    },
    render: function(){
        var createAuthorRow= function(author){
            return(
                <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a> </td>
                <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;

