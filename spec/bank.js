'user strict';

function Bank(){
  this.transaction = [["date || debit || credit || balance"]]
}

Bank.prototype.addTransferences = function () {
  this.transaction.push([this.balance, this.credit, this.debit])
}