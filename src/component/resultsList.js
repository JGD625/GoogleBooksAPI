import React, { Component } from 'react';
import './resultsList.css';
import Book from './Book';

class ResultsList extends Component {
    render() {        
        let bookResults = this.props.books.items.map((book, i) => 
            <Book {...book} key={i} />
        )

    

        return(
            <div className="list">
                { bookResults }
            </div>
        )
           
    }
}

export default ResultsList;