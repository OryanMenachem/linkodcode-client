import { useState } from "react";

export function Loading() {
  const [doneWaiting, setDoneWaiting] = useState(false);
  return <h2 className="loading">{!doneWaiting && "Loading..."}</h2>;
}

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
