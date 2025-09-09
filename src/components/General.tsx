import { useEffect, useState } from "react";

export function Loading() {
  const [doneWaiting, setDoneWaiting] = useState(false);
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDoneWaiting(true);
//     }, 5000);
//     return () => clearTimeout(timeout);
//   }, []);
//   console.log(doneWaiting);

  return <h2 className="loading">{!doneWaiting && "Loading..."}</h2>;
}
