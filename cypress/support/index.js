import './commands'

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

beforeEach(function () {
  cy.visit(Cypress.env('baseurl'));
  cy.fixture('dataSet').then(function (dataSet) {
    this.dataSet = dataSet
  });
});