import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const EditPost = () => {
  const { id } = useParams(); // Getting id from URL params
  const navigate = useNavigate();
  const [post, setPost] = useState({
    topic: "",
    description: "",
    postcategory: "",
  });
  const [error, setError] = useState(null);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      topic: post.topic,
      description: post.description,
      postcategory: post.postcategory,
    };

    axios
      .put(`http://localhost:8000/post/update/${id}`, data)
      .then((res) => {
        console.log("Update response:", res); // Log response for debugging
        if (res.data.success) {
          setPost({
            topic: "",
            description: "",
            postcategory: "",
          });
          alert("Post updated successfully");
          navigate("/"); // Navigate to home or other page after successful update
        } else {
          setError("Failed to update the post. Server returned failure."); // Specific error message for failure
        }
      })
      .catch((err) => {
        setError("Failed to update the post. Please try again."); // General error message for catch block
        console.error("Update error:", err); // Log error for debugging
      });
  };

  // Effect to fetch post data based on ID
  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/get/${id}`)
      .then((res) => {
        console.log("Fetch response:", res); // Log response for debugging
        if (res.data.success) {
          setPost({
            topic: res.data.post.topic,
            description: res.data.post.description,
            postcategory: res.data.post.postcategory,
          });
        } else {
          setError("Failed to fetch post data.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch post data. Please try again.");
        console.error("Fetch error:", err); // Log error for debugging
      });
  }, [id]); // Dependency array ensures effect runs when ID changes

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
      {error && <p className="text-danger">{error}</p>}
      <form className="needs-validation" noValidate onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Topic</label>
          <input
            type="text"
            className="form-control"
            name="topic"
            placeholder="Enter topic"
            value={post.topic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter the description"
            value={post.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Post Category</label>
          <input
            type="text"
            className="form-control"
            name="postcategory"
            placeholder="Enter the post category"
            value={post.postcategory}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginBottom: "15px" }}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;
