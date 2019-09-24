describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account()
  })


  it("a new account has a balance of 0", function(){
    expect(account.currentBalance()).toEqual(0)
  })

});
