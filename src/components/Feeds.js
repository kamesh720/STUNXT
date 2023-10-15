import Time from "./Time";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import React, { useState } from "react";
import feedData from "../data/feedData";
import Dot_symbol from "../images/Feeds/more_vert.svg";
import { FaHeart } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import addIcon from "../images/Feeds/addIcon.svg";
import "./Feeds.css";
import FeedPostForm from "./FeedPostform";

const FeedPost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [shared, setShared] = useState(false);
  const [shareCount, setShareCount] = useState(post.share);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    } else {
      setLiked(false);
      setLikesCount(likesCount - 1);
    }
  };

  const handleShare = () => {
    if (!shared) {
      setShared(true);
      setShareCount(shareCount + 1);
    } else {
      setShared(false);
      setShareCount(shareCount - 1);
    }
  };

  const captionParts = post.caption.split("#COVID19");

  return (
    <div className="feed-post bg-white" style={{ padding: "10px", margin: "5px" }}>
      <div className="feed-post ">
        <div className="d-flex" style={{ alignItems: "center" }}>
          <img
            className="pb-3"
            src={post.userAvatar}
            alt={post.username}
            width={"32px"}
            style={{ marginRight: "10px" }}
          />
          <div>
            <h6 style={{ fontSize: "16px", margin: "0" }}>{post.username}</h6>
            <p style={{ fontSize: "14px", color: "#888" }}>{post.usertype}</p>
          </div>
          <button
            style={{
              background:
                " linear-gradient(0deg, rgba(0, 217, 112, 0.1), rgba(0, 217, 112, 0.1))",
              color: "#000000",
              border: " 1px solid #00D970",
              borderRadius: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              marginLeft: "100px",
              marginBottom: "20px",
              fontSize: "13px",
              fontFamily: "Poppins",
            }}
          >
            Follow
          </button>
          <img
            src={Dot_symbol}
            alt="dot-icon"
            style={{ marginBottom: "20px", marginLeft: "5px" }}
          />
        </div>
        <div
          className="caption"
          style={{ marginBlock: "-5px", lineHeight: "20px" }}
        >
          {captionParts.map((part, index) => (
            <span key={index}>
              {index > 0 && <span style={{ color: "#0089A9" }}>#COVID19</span>}
              {part}
            </span>
          ))}
        </div>
        <img
          src={post.image}
          alt={post.caption}
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
        <div className="actions d-flex" style={{ marginTop: "10px" }}>
          <button
            onClick={handleLike}
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              padding: "0px 0px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              <FaHeart
                color={liked ? "#ff0000" : "#c3c5c7"}
                size={20}
                style={{ zIndex: 1, margin: "5px" }}
              />
            </span>
            <span>{liked ? likesCount : post.likes}</span>
          </button>
          <button
            onClick={handleShare}
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              padding: "0px 0px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <BsShare size={20} style={{ margin: "5px" }} />
            <span>{shared ? shareCount : post.share}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
const Feeds = () => {

  const index = 1

  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  const [feedPosts, setFeedPosts] = useState(feedData);

  const handleAddPost = (newPost) => {
    // Add the new post to the feedPosts state
    setFeedPosts([newPost, ...feedPosts]);
    // Close the CreatePostForm
    setShowCreatePostForm(false);
  };


  return (
    <div className="mainContainer bg-body-secondary card  phoneSize">
      <div className="fixed-elements">
        <Time />
      </div>
      <MenuBar />
      <div className="scrollable-content">
        <div className="feed-posts">
          {feedPosts.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </div>
           {/* Sticky plus button */}
           <img
        className="sticky-plus-button"
        src= {addIcon}
        alt="addIcon"
        onClick={() => setShowCreatePostForm(true)}
        
        style={{
          position: "fixed",
          bottom: "100px", // Adjust vertical position as needed
          right: "20px", // Adjust horizontal position as needed
          zIndex: 1000, // Ensure it's above other content
        }}
      />

       {/* Conditionally render the CreatePostForm */}
       {showCreatePostForm && (
        <FeedPostForm
        username="Saurabh Kumar" // Set the default username
        usertype="Student" // Set the default user type
        userAvatar="./feedData images/avatar.svg" // Set the default user avatar
        onAddPost={handleAddPost} 
      />
      )}

      <div className="fixed-elements">

        <Navbar index={index} />
      </div>
    </div>
  );
};
export default Feeds;
