import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authManager } from "./services";

export default function Login() {
  const location = useLocation();
  const { loginMode } = location.state || {};

  return (
    <div className="page login--page">
      <h1 className="title login--title">{loginMode}</h1>
      <Auth loginMode={loginMode} />
    </div>
  );
}

export function Auth({ loginMode }: { loginMode: string }) {
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <label className="label username--label" htmlFor="username">
        username
      </label>
      <input
        id="username"
        className="username--input"
        type="text"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="label password--label" htmlFor="pass">
        password
      </label>
      <input
        id="pass"
        className="password--input"
        type="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn auth--btn"
        onClick={async () => {
          try {
            const role: any = await authManager(
              { username, password },
              loginMode
            );

            if (role === "admin" || role === "user") {
              navigate("/posts");
            } else {
              navigate("/");
            }
          } catch (error: any) {
            throw new Error(error);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {isLoading ? "Loading..." : loginMode}
      </button>
    </div>
  );
}
