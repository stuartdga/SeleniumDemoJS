var demo1 = require("./demo/demo1");
var demo2 = require("./demo/demo2");
var demo3 = require("./demo/demo3");
var demo4 = require("./demo/demo4");

var demoScript = process.argv[2];
if (typeof demoScript !== 'undefined') {
    switch (demoScript) {
        case "demo1":
            demo1.SimpleDemo();
            break;
        case "demo2":
            demo2.DemoCapabilities();
            break;
        case "demo3":
            demo3.DemoGrid();
            break;                 
        case "demo4_chrome":
            demo4.DemoGrid_Chrome();
            break;
        case "demo4_ff":
            demo4.DemoGrid_Firefox();
            break;
        default:
            break;    
    }
}