export const validateResponse = async (res) => {
  if (!res.ok) {
    throw new Error(`Server responded with status: ${res.status}`);
  }

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Server did not return JSON');
  }

  return res;
};
