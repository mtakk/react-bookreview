// <reference types="cypress"/>
// ↑tcconfigjsonで指定するなら不要かも
describe("ログインフォーム", () => {
  it("タイトル", () => {
    cy.visit("/login");
    cy.get("h1").should("have.text", "ログイン");
  });
  it("emailは必須入力", () => {
    cy.visit("/login");
    cy.get("button[type='submit']").click();
    cy.get("form > p")
      .eq(0)
      .then((p) => {
        cy.wrap(p).should("include.text", "必須入力です");
      });
  });
  it("passwordは必須入力", () => {
    cy.visit("/login");
    cy.get("button[type='submit']").click();
    cy.get("form > p")
      .eq(1)
      .then((p) => {
        cy.wrap(p).should("include.text", "必須入力です");
      });
  });
  it("passwordは4文字以上", () => {
    cy.visit("/login");
    cy.get("input[name='password']").type('one');
    cy.get("button[type='submit']").click();
    cy.get("form > p")
      .eq(1)
      .then((p) => {
        cy.wrap(p).should("include.text", "4文字以上で入力してください");
      });
  });
});
