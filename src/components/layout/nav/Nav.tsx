import { Link } from "react-router";

export function Nav() {
  return (
    <nav className="main--nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/posts"}>Posts</Link>
      <Link to={"/add-post"}>Add Post</Link>
    </nav>
  );
}
