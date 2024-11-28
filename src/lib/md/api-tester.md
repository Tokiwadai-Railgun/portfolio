# A simple cli to test http apis using. 
This program is meant to test apis automatically by providing a file with urls and expected status, it will so query all urls and compare what is expected for every case returning it in the console

> [!WARNING]
> Only work with JSON for now, and response comparaison not supported yet

## Planned
* [ ] Add option to export test cases to excel or other files 

# Usage
First you'll need to write all your cases in a file with the following syntax 
```
[testName]
<Method> url
ExpectedStatus
```
then simply execute ``api-tester fileName``

> [!note]
> please not that you will need to remove all <> but not any []

## Example
### GET request
requests.http
```
[Try to get cats]
GET localhost:3000/cats
200

### POST Request
[Try to upload cats]
POST localhost:3000/cats
DATA {...}
201
```

``api-tester requests.http``


# Notes :
As this is a first project in rust it might not be optimal, expect bugs and not full functionalities
