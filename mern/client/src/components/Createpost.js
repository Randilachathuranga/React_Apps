import React, { Component } from "react";

import axios from "axios";

export default class Createpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      postcategory: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { topic, description, postcategory } = this.state;

    const data = {
      topic: topic,
      description: description,
      postcategory: postcategory,
    };

    console.log(data);
    axios.post("http://localhost:8000/post/Save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          topic: "",
          description: "",
          postcategory: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create a new post</h1>
        <form className="needs-validation" noValidate onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Topic</label>
            <input
              type="text"
              className="form-control"
              name="topic"
              placeholder="Enter topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter the description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Post Category</label>
            <input
              type="text"
              className="form-control"
              name="postcategory"
              placeholder="Enter the post category"
              value={this.state.postcategory}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginBottom: "15px" }}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Save
          </button>
        </form>
      </div>
    );
  }
}
