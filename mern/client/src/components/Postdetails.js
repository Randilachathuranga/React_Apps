import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const Postdetails = () => {
  const { id } = useParams(); // Get id parameter from the URL

  const [post, setPost] = useState({}); // State to hold the post data

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/post/get/${id}`)
        .then(res => {
          if (res.data.success) {
            setPost(res.data.post); // Update state with fetched post data
          } else {
            console.error('Failed to fetch post:', res.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          // Handle error state if needed
        });
    } else {
      console.error('No id parameter found in URL');
      // Handle no id scenario if needed
    }
  }, [id]); // useEffect dependency on id ensures it fetches data when id changes

  const { topic, description, postcategory } = post;

  return (
    <div>
      <h2>Post Details</h2>
      <div>
        <strong>Topic:</strong> {topic}
      </div>
      <div>
        <strong>Description:</strong> {description}
      </div>
      <div>
        <strong>Post Category:</strong> {postcategory}
      </div>
    </div>
  );
};

export default Postdetails;
