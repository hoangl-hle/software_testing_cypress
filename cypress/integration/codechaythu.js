// Thưa thầy em dùng code trên nhưng vẫn không đăng nhập được ạ.
// nó báo lỗi `Uncaught TagError: adsbygoogle.push() error: No slot size for availableWidth=0

// This error originated from your application code, not from Cypress.

// When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

// This behavior is configurable, and you can choose to turn this off by listening to the 'uncaught:exception' event.

// https://on.cypress.io/uncaught-exception-from-application`

// với em thấy trong box username và password không nhập được string nào từ code ( không type được email với password) nó rỗng ạ
//Uncaught Exceptions
//To turn off all uncaught exception handling
// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('kiem thu', function() {

  context('Đăng nhập', function(){
  beforeEach(function(){
    cy.visit('https://hoclieu.sachmem.vn/');
    cy.contains('Đăng nhập').click();
    cy.get('#user_email').type('hoangle12298@gmail.com'); // type email
    cy.get('#user_password').type('135792468a'); // type password
    cy.get(':nth-child(6) > .btn').click()
    cy.wait(2000);
  })

  it('Test case gio hop le', function(){
    cy.get(':nth-child(15) > .row > .col-9 > .text-dark').click()
    cy.get(':nth-child(19) > .row > .col-9 > .text-dark').click()
    cy.get('.pull-right > .btn > .fa').click()
    //cy.get(':nth-child(7) > .form-control').type('1').should('have.value', '1')
    // cy.get(':nth-child(7) > .form-control').type('ad').should('have.value', '')
    // cy.get('.row > :nth-child(1) > .form-control').clear().type(1)
    cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control')
    .clear().type('25')
    cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').should(be.focused)
    cy.get(':nth-child(2) > .error-text').should('exist')
    //cy.get('.has-error > .form-control')
  })
})
});