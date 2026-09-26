'use strict';
async function getSomething() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!response.ok) {
      throw new Error('Request failed: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.log('An error occurred:', error);
  }
}
getSomething();
