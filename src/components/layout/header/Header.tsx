import { Nav } from "../nav/Nav";

export function Header() {
  return (
    <header className="header main-header">
      <img
        className="logo-linkodcode"
        src="/logo/linkodcode-logo.jpeg"
        alt="linkodcode-logo"
      />
      <Nav />
    </header>
  );
}
