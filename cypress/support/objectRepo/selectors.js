class mainPage {

    elements = {
        mainLogo: () => cy.xpath('//div[@id="logom"]'),
        inputName: () => cy.get('input[name="name"]'),
        inputEmail: () => cy.get('input[name="email"]'),
        inputPhone: () => cy.get('input[name="phone"]'),
        sendButton: () => cy.xpath('//footer/form/button'),
        getThanksMessage: () => cy.xpath('//span[text()="תודה!"]'),
        getErrorMessageInputName: () => cy.xpath('//span[text()="שדה שם הוא שדה חובה"]'),
        getErrorMessageInputEmail: () => cy.xpath('//span[text()="שדה אימייל הוא שדה חובה"]'),
        getErrorMessageWhenInputEmailnotValid: () => cy.xpath('//span[text()="כתובת אימייל לא חוקית"]'),
        getErrorMessageInputPhone: () => cy.xpath('//span[text()="שדה טלפון הוא שדה חובה"]'),
        linkItemList: () => cy.get('.portfolio__Portfolio-sc-80s039-0 .slick-slider .slick-dots'),
        logoText_1: () => cy.xpath('//span[text()="מפתחים"]'),
        logoText_2: () => cy.xpath('//span[text()="בשפה שלך"]'),
        whatsappLink: () => cy.get('.callUsWhatsapp__BtnWhatsapp-rkzbui-0')
    }
    
    typeName(name) {
        this.elements.inputName().type(name);
    }

    typeEmail(email) {
        this.elements.inputEmail().type(email);
    }

    typePhone(phone) {
        this.elements.inputPhone().type(phone);
    }

    clickSendButton() {
        this.elements.sendButton().click()
    }
}

module.exports = new mainPage();