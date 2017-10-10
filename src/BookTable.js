import React from 'react';
import Book from './Book';
//import { Table } from 'semantic-ui-react';

class BookTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    const allBooks = books.map(book =>
      <Book
        key={book.id}
        book={book}
        deleteBook={this.props.deleteBook}
      />
    );
      return (
        <table className="table table-striped">

        <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
        <th>ISBN</th>
        <th>Price</th>
        </tr>
        {allBooks}
        </table>
      );
  }
}

export default BookTable;
