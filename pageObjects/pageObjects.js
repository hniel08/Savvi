var savviCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },
    clickRegister: function () {
        this
            .waitForElementPresent('@registerLink')
            .click('@registerLink')

        return this
    },
    createNewAccount: function () {
        this
            .waitForElementPresent('@registerLogin')
            .setValue('@registerFirst', 'Gabriel')
            .setValue('@registerLast', 'Larson')
            .setValue('@registerEmail', 'kpg15164@zwoho.com')
            .setValue('@registerPassword', 'Phineas')
            .click('@registerCheckbox')
            .expect.element('@registerCheckbox').to.be.selected
        this.click('@registerCreate')

        return this
    },
    inputCode: function () {
        this
            .waitForElementPresent('@backToRegistry')
            .pause(15000)

        return this
    },
    welcomeSavvi: function () {
        this
            .waitForElementPresent('div[class=onboarding-header]')
            .clickText('Fundraising')
            .clickText('Undecided')
            .clickText('Startup')
            .clickText('Other')
            .click('@createContinue')

        return this
    },
    services: function () {
        this
            .waitForElementPresent('div[class=onboarding-header]')
            .expect.element('@interestedTeam').to.not.be.selected
        this.expect.element('@interestedFinancing').to.not.be.selected
        this.expect.element('@interestedProduct').to.not.be.selected
        this.expect.element('@interestedOther').to.not.be.selected

        return this
    },

    //billing

    login: function () {
        this
            .waitForElementPresent('@loginNext')
            .setValue('@loginEmail', 'xun39804@zwoho.com')
            .setValue('@loginPassword', 'Phineas')
            .click('@loginNext')

        return this
    },
    billingSect: function () {
        this
            .waitForElementPresent('@home')
            .click('@account')
            .waitForElementPresent('@billingTab')
            .click('@billingTab')
            .waitForElementPresent('@setupPay')
            .click('@setupPay')
            .waitForElementPresent('@addCreditCard')
            .click('@addCreditCard')

        return this
    },
    inputCard: function () {
       
            
            this.waitForElementPresent('@nameCard')
            .setValue('@nameCard', 'Doofenshmirtz')
            .api.element('css selector','iframe[title="Secure payment input frame"]', function(result){
                console.log(result.value)
                this.frame(result.value)
            })
             this.waitForElementVisible('@cardNumber')
            .setValue('@cardNumber', '4242424242424242')
            .setValue('@expireDate', '424')
            .setValue('@cvc', '242')
            .waitForElementVisible('@cardzipcode')
            .setValue('@cardzipcode', '42424')
            this.api.frameParent()
            this.click('@savePay')
            .expect.element('span[class="method__detail method__info"]').text.to.contain('4242')        

        return this
    },
}
//Page Objects
module.exports = {
    url: "http://staging.savvi.legal/login",
    commands: [savviCommands],
    elements: {
        //create new account
        registerLink: 'div[class="help-block text--left"]',
        registerFirst: 'input[name="firstName"]',
        registerLast: 'input[name="lastName"]',
        registerEmail: 'input[name=email]',
        registerPassword: 'input[type=password]',
        registerCheckbox: 'input[type=checkbox]',
        registerCreate: 'button[type=submit]',
        registerLogin: 'button[type=button]',
        //would have to figure out how to do the number code thing
        backToRegistry: 'a[href="/register"]',
        //Which services are you interested in? 

        interestedFormation: '(//input[@type="checkbox"])[1]',
        interestedTeam: '(//input[@type="checkbox"])[2]',
        interestedFinancing: '(//input[@type="checkbox"])[3]',
        interestedProduct: '(//input[@type="checkbox"])[4]',
        interestedOther: '(//input[@type="checkbox"])[5]',
        createContinue: 'button[type=submit]',

        //login

        loginEmail: 'input[type=email]',
        loginPassword: 'input[type=password]',
        loginNext: 'button[type=submit]',

        //basic subscription

        subscription: 'a[href="/settings/subscription/entity"]',

        starter: {
            selector: '//div[@class="subscription-select__card"][1]',
            locateStrategy: 'xpath'
        },

        traction: {
            selector: '//div[@class="subscription-select__card"][2]',
            locateStrategy: 'xpath'
        },
        growth: {
            selector: '//div[@class="subscription-select__card"][3]',
            locateStrategy: 'xpath'
        },
        //click text for Subscribe and Cancel
        //click text for account billing method here
        setupPay: 'a[href="/settings/billing/methods"]',
        addCreditCard: {
            selector: '(//button[@class="add-method__card"])[1]',
            locateStrategy: 'xpath'
        },
        nameCard: 'input[name=name]',

        cardNumber:  'input[name="cardnumber"]',
    

        expireDate: 'input[name=exp-date]',
        cvc: 'input[name=cvc]',
        cardzipcode: 'input[name=postal]',
        savePay: 'button[type=submit]',

        //Delaware C Corp
        startDelawareCorp: '(//div[@class="module-card__action"])[1]',
        compName: 'input[name="51"]',
        describeComp: 'textarea[name="22"]',
        compAddress: 'input[name="14.line_one"]',
        compApt: 'input[name="14.line_two"]', 
        compCity: 'input[name="14.city"]', 


        //side tabs
        home: {
            selector: '(//li[@class="sidebar__list-item"])[1]',
            locateStrategy: 'xpath'
        },
        entity: {
            selector: '(//li[@class="sidebar__list-item"])[2]',
            locateStrategy: 'xpath'
        },
        teamentity: {
            selector: '(//li[@class="sidebar__list-item"])[3]',
            locateStrategy: 'xpath'
        },
        productIP: {
            selector: '(//li[@class="sidebar__list-item"])[4]',
            locateStrategy: 'xpath'
        },
        contracts: {
            selector: '(//li[@class="sidebar__list-item"])[5]',
            locateStrategy: 'xpath'
        },
        financing: {
            selector: '(//li[@class="sidebar__list-item"])[6]',
            locateStrategy: 'xpath'
        },
        counsel: {
            selector: '(//li[@class="sidebar__list-item"])[7]',
            locateStrategy: 'xpath'
        },
        fileCabinet: {
            selector: '(//li[@class="sidebar__list-item"])[8]',
            locateStrategy: 'xpath'
        },
        account: {
            selector: '(//li[@class="sidebar__list-item"])[9]',
            locateStrategy: 'xpath'
        },
        //account
        passwordTab: {
            selector: '(//a[@class="settings-nav__item"])[1]',
            locateStrategy: 'xpath'
        },
        billingTab: 'a[href="/settings/billing"]',

        viewInvoiceTab: {
            selector: '(//a[@class="settings-nav__item"])[3]',
            locateStrategy: 'xpath'
        },
        subscriptionsTab: {
            selector: '(//a[@class="settings-nav__item"])[4]',
            locateStrategy: 'xpath'
        },
    }
}
