const string = 'All your base are belong to us.';
const regex = /base/;
const isExisting = regex.test(string);
console.log(isExisting);