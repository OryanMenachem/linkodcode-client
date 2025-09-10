export function timeStamp(): string {
  const timestamp = new Date().toLocaleString();
  return timestamp;
}

export async function httpRequest({ url, method, body = null }: Url) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result: HttpResult = {
    error: false,
  };

  if (method?.toUpperCase() != "GET" && body != null) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      result.status = response.status;
      result.error = true;
      result.message = response.statusText;
      return result;
    }

    result.status = response.status;
    result.message = response.statusText;
    result.content = await response.json();
    return result;
  } catch (error) {
    result.error = true;
    return result;
  }
}

export type Url = {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: object | null;
};

export type HttpResult = {
  status?: number;
  message?: string;
  error: boolean;
  content?: object[] | object | string;
};

export function parseJWT({token} : {token: string}) {
  if (token) {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded);
  }
  return null;
}
