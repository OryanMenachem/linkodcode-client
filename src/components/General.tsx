import { useState } from "react";



export function DateTime({
  classname,
  timestamp,
}: {
  classname: string;
  timestamp: string;
}) {
  return (
    <time className={`time ${classname}--time`} dateTime={timestamp}>
      {timestamp}
    </time>
  );
}

export function LikeBtn({ likesNumber }: { likesNumber: number }) {
  const [likes, setLikes] = useState(likesNumber);
  const [liked, setLiked] = useState(false);

  const addRemoveLike = () => {
    !liked ? setLikes(likes + 1) : setLikes(likes - 1);
    setLiked(!liked);
  };
  return (
    <button className="btn likes-btn" onClick={() => addRemoveLike()}>
      👍{likes}
    </button>
  );
}
