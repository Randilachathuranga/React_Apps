import React, { Component } from "react";

import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Post: [],
    };
  }

  componentDidMount() {
    this.retrievePost();
  }

  retrievePost() {
    axios
      .get("http://localhost:8000/post/get")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            Post: res.data.existingPosts,
          });
          console.log(this.state.Post); // Moved console.log inside the axios .then() block
        }
      })
      .catch((err) => {
        console.error("Error retrieving posts:", err);
      });
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) =>{
      alert("Deleted successfully")
      this.retrievePost();
    })
  }
  
  render() {
    return (
      <div>
        <p>All posts</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.Post.map((post, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/${post._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {post.topic}
                  </a>
                </td>
                <td>{post.description}</td>
                <td>{post.postcategory}</td>

                <td>
                  <a className="btn btn-warning" href={`/edit/${post._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="" onClick={() =>this.onDelete(post._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Create New Post
          </a>
        </button>
      </div>
    );
  }
}
