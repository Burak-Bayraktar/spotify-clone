export const generateLoginUrl =() => {
    let baseUrl = `https://accounts.spotify.com/authorize?`;
    baseUrl += `&client_id=${process.env.REACT_APP_CLIENT_ID}`
    baseUrl += `&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`
    baseUrl += `&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`
    
    return baseUrl
}