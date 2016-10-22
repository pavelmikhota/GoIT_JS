var app = require('../src/js/app.js')

describe("A pow", function() {
  it("it should call pow function", function() {
    var result;

    result = app.pow(3, 2);

    expect(result).toEqual(9);
  });

  it("it should call pow function", function() {
    var result;

    result = app.pow(2, -1);

    expect(result).toEqual(0.5);
  });

  it("it should call pow function", function() {
    var result;

    result = app.pow(3, 0);

    expect(result).toEqual(1);
  });

  it("it should call pow function", function() {
    var result;

    result = app.pow(3, 0.5);

    expect(result).toEqual('Arguments is not integer numbers!');
  });

})