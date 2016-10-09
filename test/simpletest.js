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
        driver.get("https://www.google.com");
    });

    it("The title is Wikipedia", function () {
        driver.getTitle().then(function (title) {
            assert.equal(title, "Wikipedia");
        });
    });

    it("I enter the search", function () {
        //driver.findElement(By.name('search')).sendKeys('Chattanooga');
        var searchInput = driver.findElement(By.name('search'));
        searchInput.sendKeys('Chattanooga')
            .then(function (input) {
                assert.equal(input.getAttribute('value'), 'Chattanooga');
            });
    });

    it("The title changes", function () {
        driver.findElement(By.xpath('//*[@id="search-form"]/fieldset/button')).click();
        driver.getTitle()
            .then(function (title) {
                assert.equal(title, 'Chattanooga, Tennessee - Wikipedia, the free encyclopedia');
            });
    });
});