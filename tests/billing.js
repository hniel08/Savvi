var credit = {}
module.exports = {
    beforeEach: browser => {
        credit = browser.page.pageObjects()
        credit.navigate()
            .waitForElementPresent('@registerLink', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Create New Account': browser => {
        credit.login()
        credit.billingSect()
        credit.inputCard()
        
    },
}