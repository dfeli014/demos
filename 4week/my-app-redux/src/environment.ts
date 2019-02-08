const dev = {
  pokeContext: 'http://localhost:3000'
}

const prod = {
  pokeContext: 'http://react-app-userinterface.s3-website.us-east-2.amazonaws.com:3000'
}

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
  environment = prod;
}