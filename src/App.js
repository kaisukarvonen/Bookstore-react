import React from 'react'
import BookTable from './BookTable'
import BookForm from './BookForm'

class App extends React.Component {
		  constructor (props) {
		      super(props)
		      this.state = {
		          books: ['plaa']
		      }
    this.deleteBook = this.deleteBook.bind(this)
    this.createBook = this.createBook.bind(this)
		   }

		  componentDidMount () {
    // Call load books
    this.loadBooksFromServer()
		  }

		  // Load books from database
		  loadBooksFromServer () {
		      fetch('http://localhost:8080/books')
      .then(result => result.json())
      .then(result => this.setState({ books: result })
      )
		  }

  deleteBook (book) {
    fetch('http://localhost:8080/delete/' + book.id)
      .then(result => this.loadBooksFromServer())
  }

  createBook (book) {
    // fetch
    console.log(JSON.stringify(book))
    fetch('http://localhost:8080/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(book)
    }).then(response => this.loadBooksFromServer())
  }

		  render () {
		    return (
		       <div style={{padding: 50}}>
        <BookForm createBook={this.createBook} />
        <BookTable
          deleteBook={this.deleteBook}
          books={this.state.books} />

		       </div>
		    )
		  }
}

export default App
