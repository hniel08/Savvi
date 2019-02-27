const properties = require('./nightwatch.props')
module.exports = {
    "src_folders" : "tests",
    "page_objects_path" : "pageObjects",
  
    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver" : properties.resourcePath + properties.chromedriver,
        "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
        "webdriver.edge.driver": properties.resourcePath + properties.edgedriver, 
      }
    },
  
    "test_settings" : {
      "test_workers": true, // this is for chrome, firefox, and edge to work. Has to be in test_settings.
      "default" : {
        //If it keeps skipping failed tests, it is because of the "skip_testcases_on_fail"
       
        "skip_testcases_on_fail" : false,
        "launch_url" : "http://localhost",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome", //if you want to run other browser, you need to put them in. 
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  }