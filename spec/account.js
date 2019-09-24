'use strict'; 

function Account(){
  this.balance = 0;
}
Account.prototype.currentBalance = function(){
  return this.balance;
}

// 'user strict';

// function Account() {
//   this.balance = 0
// }
// Account.prototype.currentBalance = function () {
//   return this.balance;
// }