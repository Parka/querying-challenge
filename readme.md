Yarn is used to handle packages.

**Start app**
```
  yarn
  yarn start
```

This app expects the following env variables declared in a .env file:

```
API_ENDPOINT=[YOUR API ENDPOINT HERE]
API_KEY=[YOUR API KEY HERE]
```
if no `API_ENDPOINT` is provided, mock data is generated.
`API_KEY` is not mandatory and was added to use a test restdb endpoint.

Assumptions:
  - API reponse's keys are verbatim as taken from challenge requirements.
  - API does not respond with errors (errors are not being handled gracefully ATM due to time constrains).
  - Spaces in the filters will generate a new AND condition upon fetching data.