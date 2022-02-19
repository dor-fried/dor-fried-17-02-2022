import mainPage from '../support/objectRepo/selectors'

describe('Functionality tests', () => {
    
    beforeEach(function () {
        cy.visit(Cypress.env('baseurl'));
        cy.fixture('dataSet').then(function (dataSet) {
            this.dataSet = dataSet
        });
    });

    it('Get the global window.location object of the page that is currently active', function () {
        cy.location().should((loc) => {
            expect(loc.hostname).to.eq('automation.herolo.co.il')
        });
    });

    it('logo text has display - מפתחים בשפה שלך', () => {
        mainPage.elements.logoText_1()
            .should('exist')
        mainPage.elements.logoText_2()
            .should('exist')
    });

    it('should send form data', function () {
        mainPage.typeName(this.dataSet.validName);
        mainPage.typeEmail(this.dataSet.validEmail);
        mainPage.typePhone(this.dataSet.validPhone);
        cy.request('https://automation.herolo.co.il/page-data/thank-you/page-data.json').as('page-data')
        mainPage.clickSendButton();
        cy.get('@page-data').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('componentChunkName', 'component---src-templates-thank-you-js')
            expect(response.body).to.have.property('path', '/thank-you/')
        });
        mainPage.elements.getThanksMessage()
            .should('exist')
    });

    it('should attampt to send form with no data - validate alerts', function () {
        mainPage.clickSendButton();
        mainPage.elements.getErrorMessageInputName()
            .should('exist')
        mainPage.elements.getErrorMessageInputEmail()
            .should('exist')
        mainPage.elements.getErrorMessageInputPhone()
            .should('exist')
    });

    it('should disaply alert when email input are not valid', function () {
        mainPage.typeName(this.dataSet.validName);
        mainPage.typeEmail(this.dataSet.invalidEmail);
        mainPage.elements.getErrorMessageWhenInputEmailnotValid()
            .should('exist')
    });

    it('get the length of the menu link items', function () {
        mainPage.elements.linkItemList()
            .children()
            .should('have.length', 20)
    });

    it('check if the whatsapp link is actually live', function () {
        mainPage.elements.whatsappLink()
            .invoke('removeAttr', 'target')
            .then(link => {
                cy
                    .request(link.prop('href'))
                    .its('status')
                    .should('eq', 200);
            });
    });
});