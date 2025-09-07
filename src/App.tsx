import Posts from "./pages/Posts";
import data from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Posts postsArray={data} />
    </>
  );
}

export default App;
