import { LoginButtons } from "../../components";

export default function Home() {
  return (
    <div className="page home--page">
      <h1 className="title home--title">Linkodcode</h1>
      <p className="app-description">An app for sharing and viewing posts</p>
      <LoginButtons/>
    </div>
  );
}
