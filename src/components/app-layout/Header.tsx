import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="header main-header">
      <img
        className="logo-linkodcode"
        src="../../public/logo/linkodcode-logo.jpeg"
        alt=""
      />
      <Navbar />
    </header>
  );
}
