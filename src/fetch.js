import moment from 'moment';

const generateAmount = (order=3)=>Math.round(Math.random() * Math.pow(10, order) *100)/100;

const MOCK = {
  json: () => ({
    ['data to show']: [... new Array(50)].map((x, id)=>({
      ['ID']: '_ID_'+id,
      ['Comercio']: '_Comercio_'+id,
      ['CUIT']: '_CUIT_',
      ['Concepto 1']: generateAmount(),
      ['Concepto 2']: generateAmount(),
      ['Concepto 3']: generateAmount(),
      ['Concepto 4']: generateAmount(),
      ['Concepto 5']: generateAmount(),
      ['Concepto 6']: generateAmount(),
      ['Balance actual']: generateAmount(4),
      ['Activo']: Math.random()>.5,
      ['Ultima venta']: moment().subtract(Math.round(Math.random()*100), 'days').format('DD/MM/YYYY'),
    })),
    ['rows total']: 50,
    ['rows per page']: 3,
    ['sort']: [],
  })
}

const logQuery = (query) =>
  console.log(
    `%c${addSpaces(` >>> ${prettyPrint(query)}`)}`,
    'color: green; background: black; font-weight:bold; font-size: 14px;'
);

const prettyPrint = txt =>
  JSON.stringify(
    JSON.parse(txt),
    null,
    2
  );

const addSpaces = txt =>
  txt
    .split('\n')
    .map(x=>x+(new Array(Math.max(120-x.length, 0))).join(' '))
    .join('\n');

const component = (query='', { headers, ...options}={})=> {
  logQuery(query?query.slice(3):'{}');

  if (!process.env.API_ENDPOINT)
    return new Promise(resolve => setTimeout(() => resolve(MOCK), 2000))

  var myHeaders = new Headers(headers);
  if(process.env.API_KEY)
    myHeaders.append("x-apikey", process.env.API_KEY);

  const url = process.env.API_ENDPOINT + query;
  return fetch(url , {headers: myHeaders, ...options})
}

export default component;