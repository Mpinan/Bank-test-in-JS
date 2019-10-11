describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account()
  })


  it("a new account has a balance of 0", function(){
    expect(account.currentBalance()).toEqual(0)
  })

  it('can add money to account', function(){
    account.addMoneyToAccount(10)
    expect(account.currentBalance()).toEqual(10)
  })

  it('can substract money from account', function(){
    account.addMoneyToAccount(100)
    account.substractMoneyFromAccount(10)
    expect(account.currentBalance()).toEqual(90)
  })

  it("can't substract money if balance is 0", function(){
    expect(account.substractMoneyFromAccount(10)).toContain("Insufficient balance")
  })
  it("can't add money a quantity bigger than 3000", function(){
    expect(account.addMoneyToAccount(3001)).toContain("That's too much money")
  })


});
