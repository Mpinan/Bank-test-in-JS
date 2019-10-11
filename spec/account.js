'use strict'; 

function Account(){
  this.balance = 0;
  this.debit = 0
  this.credit = 0
  this.bank = new Bank
}

Account.prototype.currentBalance = function(){
  return this.balance;
}

Account.prototype.addMoneyToAccount = function(amount){
  this.credit = amount
  if(amount > 3000) {
    return "That's too much money";
  } else {
  this.balance += this.credit;
  return this.bank.addTransferences()
  }};

Account.prototype.substractMoneyFromAccount = function(amount){
  this.debit = amount
  if (amount > this.balance) {
    return "Insufficient balance";
  } else {
  this.balance -= this.debit
  return this.bank.addTransferences()
}}

Account.prototype.printTransaction = function(){
  return this.transaction;
}
