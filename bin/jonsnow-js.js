#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const aegonTargaryen = 'Jon Snow';
const knows = 'nothing';
const img = fs.readFileSync(path.join(__dirname, '../jon-snow.txt')).toString();
console.log(img);

console.log(`${aegonTargaryen} knows ${knows}`);