const textData = require ("../../fixtures/dataSantaTest.json");

describe('click links', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: '/api/login?redirect=%2',
      body: {
        email: Cypress.env('username'),
        password: Cypress.env('password'),
             }
    })
    cy.visit('/')
    cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'));
  })

  it('test links', () => {
      textData.forEach((item) => {
      cy.testLink(item.selector, item.pathnameForTest, item.selectorForTest, item.textForTest)
    })               
  })
})