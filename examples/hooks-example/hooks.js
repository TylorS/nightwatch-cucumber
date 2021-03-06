module.exports = function () {
  this.Before(function (scenario, callback) {
    console.log('Before start');
    setTimeout(function() {
      console.log('Before end');
      callback();
    }, 1000);
  });

  this.After(function (scenario, callback) {
    console.log('After start');
    setTimeout(function() {
      console.log('After end');
      callback();
    }, 1000);
  });

  this.Before(function (scenario) {
    this.init();
  });

  this.After(function (scenario) {
    this.click('input[name="q"]');
  });

  this.After('@sometag', function (scenario) {
    this.click('buttons');
  });
}
