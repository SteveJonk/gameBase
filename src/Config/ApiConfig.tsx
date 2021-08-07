export const Endpoint = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'gameapi/api/appdetails?appids='
      : '/api/appdetails?appids=',
};

console.log(process.env.NODE_ENV);
