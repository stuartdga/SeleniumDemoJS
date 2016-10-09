var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

module.exports = {
  DemoCapabilities() {
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
      'args': ['--test-type', '--disable-extensions']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);

    var driver = new webdriver.Builder()
      .forBrowser('chrome')
      .withCapabilities(chromeCapabilities)
      .build();

    driver.get('https://www.wikipedia.org/');
    //driver.findElement(By.name('search'))
    //  .sendKeys('Chattanooga')
    //  .then(function () { driver.sleep(5000) });
    var searchInput = driver.findElement(By.name('search'));
    searchInput.sendKeys('Chattanooga')
      .then(function () { driver.sleep(5000) });

    //driver.findElement(By.xpath('//*[@id="search-form"]/fieldset/button'))
    //  .click()
    //  .then(function () { driver.sleep(10000) });
    driver.findElement(By.css('button.pure-button.pure-button-primary-progressive'))
      .click()
      .then(function() { driver.sleep(5000) });
    
    driver.wait(until.titleIs('Chattanooga, Tennessee - Wikipedia, the free encyclopedia'), 1000);
    driver.quit();
  }

};