import { MainNav, UserNav } from "../nav/Nav";

export function MainHeader() {
  return (
    <header className="main--header">
      <img
        className="logo-linkodcode"
        rel="icon"
        src="/logo/linkodcode-logo.jpeg"
        alt="linkodcode-logo"
      />
      <MainNav />
    </header>
  );
}

export function UserHeader() {
  return (
    <header className="main--header">
      <img
        className="logo-linkodcode"
        rel="icon"
        src="/logo/linkodcode-logo.jpeg"
        alt="linkodcode-logo"
      />
      <UserNav />
    </header>
  );
}
