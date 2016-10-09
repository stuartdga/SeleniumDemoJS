var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

module.exports = {
  SimpleDemo() {
    var driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();

    driver.get('https://www.wikipedia.org/');
    driver.findElement(By.name('search'))
      .sendKeys('Chattanooga')
      .then(function () { driver.sleep(5000) });;
    driver.findElement(By.xpath('//*[@id="search-form"]/fieldset/button'))
      .click()
      .then(function () { driver.sleep(10000) });
    driver.wait(until.titleIs('Chattanooga, Tennessee - Wikipedia, the free encyclopedia'), 1000);
    driver.quit();
  },

};