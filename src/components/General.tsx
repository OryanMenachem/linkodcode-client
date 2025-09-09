import { useState } from "react";

export function Loading() {
  const [doneWaiting, setDoneWaiting] = useState(false);
  return <h2 className="loading">{!doneWaiting && "Loading..."}</h2>;
}
