'use strict';

const test = require('ava');
const App = require('./app');


test('1+2の足し算が出来る', async (t) => {
  const app = new App();
  t.is(await app.sum(1, 2), 3);
});
