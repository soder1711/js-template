'use strict';
async function postSomething() {
  const user = {
    name: 'John',
    job: 'unemployed'
  }
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1',
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  console.log(data);
}
postSomething();
