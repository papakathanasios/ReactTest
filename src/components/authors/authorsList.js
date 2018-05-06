"use strict";

var React = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/react');
var createReactClass = require( 'C:/Users/papak/AppData/Roaming/npm/node_modules/create-react-class');


var AuthorList = createReactClass({
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
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;

