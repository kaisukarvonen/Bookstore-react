import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook() {
      this.props.deleteBook(this.props.book);
      console.log(this.props.book.id);
    }

    render() {
        return (

          <tr>
          <td>{this.props.book.title}</td>
          <td>{this.props.book.author}</td>
          <td>{this.props.book.year}</td>
          <td>{this.props.book.isbn}</td>
          <td>{this.props.book.price}</td>
          <td className="btn btn-danger" onClick={this.deleteBook}>Delete</td>
          </tr>

        );
    }
}

export default Book;
