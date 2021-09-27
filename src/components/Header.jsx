import React, { Component } from "react";

class Header extends Component {
  submitInput = (e) => {
    e.preventDefault();
    this.props.handlerSubmit(this.props);
  };
  render() {
    return (
      <div className="header">
        <h2>React Crud</h2>
        <form className="crudForm" onSubmit={this.submitInput}>
          <p>
            <label htmlFor="addListEmail">Add Email</label>
            <input
              type="text"
              id="addListEmail"
              name="email"
              value={this.props.email}
              onChange={(e) => this.props.setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="addListUser">Add Username</label>
            <input
              type="text"
              id="addListUser"
              name="user"
              value={this.props.userName}
              onChange={(e) => this.props.setUserName(e.target.value)}
            />
          </p>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Header;
