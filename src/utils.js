export function checkStatus(response) {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  } else {
    const error = new Error(statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}