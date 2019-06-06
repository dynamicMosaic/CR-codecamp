import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className='container col-md-4 col-sm-4 col-lg-4 text-center pt-5'>
            <div className="form-group">   
            <form onSubmit={this.handleSubmit} >
                <div className="row">
                    <label>
                        Name:<input type="text" className="p-2" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>  
                <div className="row">
                    <label>
                        Email:<input type="text" className="p-2" value={this.state.email} onChange={this.handleChange} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
                </form> 
            </div>
          </div>
      );
    }
  }
  export default NameForm