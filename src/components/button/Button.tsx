import { useState } from "react";
import { useNavigate } from "react-router";

export function LikeBtn({ likesNumber }: { likesNumber: number }) {
  const [likes, setLikes] = useState(likesNumber);
  const [liked, setLiked] = useState(false);

  const addRemoveLike = () => {
    !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    setLiked(!liked);
  };
  return (
    <button className="btn likes-btn" onClick={() => addRemoveLike()}>
      {likes}👍
    </button>
  );
}

export function LoginButtons() {
  const navigate = useNavigate();
  return (
    <div className="login-button-container">
      <button
        className="btn signIn-btn"
        onClick={() => navigate("/login", { state: { loginMode: "signIn" } })}
      >
        Sign In
      </button>
      <button
        className="btn signUp-btn"
        onClick={() => navigate("/login", { state: { loginMode: "signUp" } })}
      >
        Sign Up
      </button>
    </div>
  );
}
