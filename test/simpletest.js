var assert = require('assert');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

describe("Demonstrating webdriver promises", function () {
    this.timeout(30000);
    var driver;

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function () {
        driver.quit();
    });

    it("I open the website", function () {
        driver.get('https://www.wikipedia.org/');
    });

    it("The title is Wikipedia", function () {
        return driver.getTitle().then(function (title) {
            assert.equal(title, "Wikipedia");
        });
    });

    it("I enter the search", function () {
        driver.findElement(By.name('search'))
            .sendKeys('Chattanooga')
            .then(function () {
                return driver.findElement(By.name('search')).getAttribute('value')
                .then(function(value) {
                    assert.equal(value, 'Chattanooga');
                });
            });    
    });

    it("The title changes", function () {
        driver.findElement(By.xpath('//*[@id="search-form"]/fieldset/button')).click();
        return driver.getTitle()
            .then(function (title) {
                console.log(title);
                assert.equal(title, 'Chattanooga, Tennessee - Wikipedia');
            });
    });

});