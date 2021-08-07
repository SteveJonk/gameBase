export const Endpoint = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://store.steampowered.com/api/appdetails?appids='
      : '/api/appdetails?appids=',
};

console.log(process.env.NODE_ENV);
