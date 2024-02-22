import { useState } from "react";

function PostCard({ id, title, description, body, imageUrl, likes = 0 }) {
  const [likesState, setLikes] = useState(likes);

  const updateLikes = () => {
    const updateLikes = likesState + 1;
    setLikes(updateLikes);
    likes = updateLikes;
  };
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <img src={imageUrl} width="100%" alt="Random Image" />
          <h5 className="card-title mt-4">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {description}
          </h6>
          <p className="card-text">{body}</p>
          <div className="">
            <p style={{ cursor: "pointer" }} onClick={updateLikes}>
              likes &#x2022; {likesState}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
