const clientId = '080a308591c34d28af52bfe3685907c2';
const redirectUri = 'http://127.0.0.1:5173/callback';

export const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

export const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

export const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export const initiateSpotifyAuth = async () => {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed);
  
  localStorage.setItem('code_verifier', codeVerifier);

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope: 'user-read-private user-read-email',
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  const authUrl = new URL("https://accounts.spotify.com/authorize")
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

export const getToken = async (code) => {
  const codeVerifier = localStorage.getItem('code_verifier');
  const URL = 'https://accounts.spotify.com/api/token';
  const payload = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    })
  }

  const body = await fetch(URL, payload);
  const response = await body.json()
  return response.access_token;
}