import { MainNav } from "../nav/Nav";

export function MainHeader() {
  return (
    <header className="main--header">
      <img
        className="logo-linkodcode"
        src="/logo/linkodcode-logo.jpeg"
        alt="linkodcode-logo"
      />
      <MainNav />
    </header>
  );
}
