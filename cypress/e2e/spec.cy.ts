/// <reference types="cypress"/>
// ↑tcconfigjsonで指定するなら不要かも
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

})