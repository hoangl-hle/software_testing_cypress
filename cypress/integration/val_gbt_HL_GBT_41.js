Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Kiểm thử chức năng giao bài tập', function() {
  context('Kiểm thử HL-GBT_41', function(){
    before(function(){
      cy.log('I run before every test in every spec file!!!!!!')
      const timeWaitToLoadPage = 6000
      cy.visit('https://hoclieu.sachmem.vn/');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('hoangle12298@gmail.com'); // type email
      cy.get('#user_password').type('135792468a'); // type password
      cy.get(':nth-child(6) > .btn').click()
      cy.wait(timeWaitToLoadPage)

      // click "Lớp 12"
      cy.get(':nth-child(15) > .row > .col-9 > .text-dark').click()

      // click "Trắc nghiệm Địa lí 12 (2018)"
      cy.get(':nth-child(24) > .row > .col-9 > .text-dark').click()

      // Chờ load xong trang giao bài tập để hiện thị nút "Giao bài tập"
      cy.wait(timeWaitToLoadPage*2)

      //cy.visit('https://hoclieu.sachmem.vn/question_set/5ba64979c676f8880d7086b0/5c075a3ec997c55926f0395c/preview');
      // Click nút giao bài tập
      cy.get('.pull-right > .btn').click()
        //cy.get(':nth-child(7) > .form-control').type('1').should('have.value', '1')
      
      // Chờ load xong popup giao bài tập
      cy.wait(timeWaitToLoadPage)
      cy.log('Kiểm thử giá trị nhập có kí tự chữ textbox số lần làm lại - không cho phép/không hiện thị nếu nhập chữ')
    })
    it('Test case 1', function(){
      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(65)).should('have.value', '')
    })
    it('Test case 2', function(){
      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(90)).should('have.value', '')
    })
    it('Test case 3', function(){
      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(77)).should('have.value', '')
    })

    // it('Kiểm tra giá trị nhập có kí tự chữ textbox số lần làm lại - không cho phép/không hiện thị nếu la ki tu dac biet vd @', function(){
    //   // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
    //   cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(64)).should('have.value', '')

    //   /*o convert an ASCII value to its corresponding character use the fromCharCode static method of the String JavaScript object.
    //   Example: console.log(String.fromCharCode(65));*/

    //   /*//get value
    //   cy .get(':nth-child(7) > .form-control').invoke('val').then(val => { const sometext = val; cy.log(sometext); })*/
    // })
  })
});