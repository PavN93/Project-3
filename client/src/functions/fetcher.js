const fetcher = async (url, token, body) => {
  const fetchParams = {
    method: 'GET',
    headers: {},
  };
  if (body) {
    fetchParams.method = 'POST';
    fetchParams.body = JSON.stringify(body);
    fetchParams.headers['Content-Type'] = 'application/json';
  }
  if (token) {
    // we use x-access-token header here, but we could just as easily used the Authorization header
    // or indeed passed the token in the request body (but that would mean extra code to merge it with any body fields passed to the function)
    fetchParams.headers['x-access-token'] = token;
  }
  try {
    const response = await fetch(url, fetchParams);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export default fetcher;