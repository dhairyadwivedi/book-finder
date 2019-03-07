import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import BookList from "./BookList";


class Books extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchInput: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchInput})
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            });
    }

    handleSearch = (e) => {
        this.setState({ searchInput: e.target.value });
    }
    
    render(){
        return(
            <div>
                <Search searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

export default Books;