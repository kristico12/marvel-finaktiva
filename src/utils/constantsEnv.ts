const baseUrl = process.env.REACT_APP_API_BACKEND ?? '';
const publicKey = process.env.REACT_APP_API_PUBLIC_KEY ?? '';
const hash = process.env.REACT_APP_API_HASH ?? '';

export {
  baseUrl,
  publicKey,
  hash,
}