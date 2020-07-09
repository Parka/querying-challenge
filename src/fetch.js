
var myHeaders = new Headers();
if(process.env.API_KEY)
  myHeaders.append("x-apikey", process.env.API_KEY);

const component = (query='', options)=> {
  const url = process.env.API_ENDPOINT + query;
  console.log(`%c >>> ${url}`, 'color: green; background: black; font-weight:bold; font-size: 14px;');
  return fetch(url , {headers: myHeaders, ...options})
}
export default component;