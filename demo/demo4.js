var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = {
    GetDriver(browser, server = null, capabilities = null) {
        var chromeCapabilities = webdriver.Capabilities.chrome();
        var chromeOptions = {
            'args': ['--test-type', '--disable-extensions']
        };
        if (server == null && capabilities == null) {
            return new webdriver.Builder().forBrowser(browser).build();
        }
        if (capabilities == null) {
            return new webdriver.Builder().forBrowser(browser).usingServer(server).build();
        }
        if (server == null) {
            return new webdriver.Builder().forBrowser(browser).withCapabilities(capabilities).build();
        }
        return new webdriver.Builder().forBrowser(browser).usingServer(server).withCapabilities(capabilities).build();
    },

    DemoGrid_Chrome() {

        var chromeCapabilities = webdriver.Capabilities.chrome();
        var chromeOptions = {
            'args': ['--test-type', '--disable-extensions']
        };
        chromeCapabilities.set('chromeOptions', chromeOptions);
        var driver = this.GetDriver('chrome', 'http://127.0.0.1:4444/wd/hub', chromeCapabilities);
        this.DemoGrid(driver);
    },

    DemoGrid_Firefox() {
        var driver = this.GetDriver('firefox', 'http://127.0.0.1:4444/wd/hub', null);
        this.DemoGrid(driver);
    },

    DemoGrid(driver) {
        driver.get('https://www.wikipedia.org/');
        driver.findElement(By.name('search'))
            .sendKeys('Chattanooga')
            .then(function () { driver.sleep(3000) });;
        driver.findElement(By.xpath('//*[@id="search-form"]/fieldset/button'))
            .click()
            .then(function () { driver.sleep(3000) });
        driver.wait(until.titleIs('Chattanooga, Tennessee - Wikipedia, the free encyclopedia'), 1000);
        driver.quit();
    },

};