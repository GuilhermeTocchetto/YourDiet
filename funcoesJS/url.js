const URL = "http://localhost:8081/api/";

export async function chamadaURL(endpoint, options = {}) {
  const response = await fetch(`${URL}/${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body || null,
  });

  const data = await response.json();
  return data;
}
