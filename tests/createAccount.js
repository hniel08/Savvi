var client = {}
module.exports = {
    beforeEach: browser => {
        client = browser.page.pageObjects()
        client.navigate()
            .waitForElementPresent('@registerLink', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Create New Account': browser => {
        client.clickRegister()
        client.createNewAccount()
        client.inputCode()
        client.welcomeSavvi()
        client.services()

    },
}