import { httpRequest, type Url } from "../../utils/helpers";
import { parseJWT } from "../../utils/helpers";

export async function auth(
  body: {
    username: string;
    password: string;
  },
  loginMode: string
) {
  const url: Url = {
    url: `http://localhost:3000/auth/${loginMode}`,
    method: "POST",
    body,
  };
  const result = await httpRequest(url);
  if (result.content) {
    const token: any = result.content;
    const decodedToken = parseJWT(token);
    localStorage.setItem("decodedToken", decodedToken)
    return decodedToken.role;
  }
  return result.message;
}
