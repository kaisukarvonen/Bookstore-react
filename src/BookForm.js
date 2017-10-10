import React from 'react';

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', author: '', year: 2017,
        isbn: '', price: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
       // Set states here
       const name = event.target.name;
       this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Create new srudent object and call createStudent
        const newBook = {title:this.state.title, author:this.state.author,
        year:this.state.year, isbn:this.state.isbn, price:this.state.price};
        console.log(newBook);
        this.props.createBook(newBook);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Create student</div>
                <div className="panel-body">
                <form className="form-inline">
                    <div className="col-md-2">
                        <input type="text" placeholder="Title" className="form-control"  name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Author" className="form-control" name="author" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Year" className="form-control" name="year" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="ISBN" className="form-control" name="isbn" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="number" placeholder="Price" className="form-control" step="0.1" name="price" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Save</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default BookForm;
