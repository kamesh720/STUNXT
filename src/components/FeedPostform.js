import React, { useState } from "react";
import "./FeedPostform.css";

const FeedPostForm = ({ username, usertype, userAvatar, onAddPost }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null); // Use null to represent no selected image
  const [imageURL, setImageURL] = useState(""); // To store the URL of the selected image

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object with the entered data
    const newPost = {
      id: Date.now(),
      username,
      usertype,
      userAvatar,
      caption,
      likes: 0,
      share: 0,
      image: imageURL, // Use the imageURL state variable here
    };

    // Pass the new post to the parent component to add to the feed
    onAddPost(newPost);

    // Reset the form fields
    setCaption("");
    setImage(null);
    setImageURL(""); // Reset the image URL
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Set the imageURL state to display the selected image in the post
    const imageURL = URL.createObjectURL(selectedImage);
    setImageURL(imageURL);
  };



  return (
    <div className="fullscreen-form">
        <div>
      <h2>Create a New Post</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        {imageURL && (
          <div className="mt-2">
            <img src={imageURL} alt="Selected" height={50} width={50} />
          </div>
        )}
        <button className="mt-4 rounded-3 bg-success text-light" type="submit">Submit</button>
        <button className="ms-5 rounded-3 bg-primary text-light" type="button">Close</button>
      </form>
    </div>
  );
};

export default FeedPostForm;
