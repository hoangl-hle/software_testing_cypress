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
      const _password = 123456789
      const _username = 'hoangle12298@gmail.com'
      cy.visit('https://hoclieu.sachmem.vn/');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type(_username); // type email
      cy.get('#user_password').type(_password); // type password
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
    it('HL-GBT_41 - nhap tung chu cai cua bo chu cai alphabet', function(){
      var i
      for (i=65; i<= 90; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).click().should('have.value', '')
      }
      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      
    })
    it('HL-GBT_41 - 2a', function(){
      var i
      for (i=97; i<= 122; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
        cy.wait(2000)
      }
    })
    it('HL-GBT_41 - 2a', function(){
      // cac ki tu dac biet 
      var i
      for (i=32; i<= 47; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
        cy.wait(2000)
      }
    })
    it('HL-GBT_41 - 2a', function(){
      // cac ki tu dac biet 
      var i
      for (i=58; i<= 64; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
        cy.wait(2000)
      }
    })
    it('HL-GBT_41 - 2a', function(){
      // cac ki tu dac biet 
      var i
      for (i=91; i<= 96; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
        cy.wait(2000)
      }
    })
    it('HL-GBT_41 - 2a', function(){
      // cac ki tu dac biet 
      var i
      for (i=123; i<= 126; ++i){
        cy.get(':nth-child(7) > .form-control').type(String.fromCharCode(i)).clear().click().should('have.value', '')
        cy.wait(2000)
      }
    })
    it('HL-GBT_43 - 1a', function(){
      // Điền vào textbox số lần làm bài kí tự là số nguyên -> expect: hiện thị số nguyên kí tự đặc biệt vẫn cho nhập + - và tạo thành công
      // chữ cái vẫn cho nhập e;
      // thực ra nếu bộ chữ cái tiếng việt thì tất cả đều cho phép nhập kể cả chữ cái thuờng
      cy.get(':nth-child(7) > .form-control').type(0).should('have.value', '0')
    })
    it('HL-GBT_43 - 1a', function(){
      // Điền vào textbox số lần làm bài kí tự là số nguyên -> expect: hiện thị số nguyên kí tự đặc biệt vẫn cho nhập + - và tạo thành công
      // chữ cái vẫn cho nhập e;
      // thực ra nếu bộ chữ cái tiếng việt thì tất cả đều cho phép nhập kể cả chữ cái thuờng
      cy.get(':nth-child(7) > .form-control').type(0).should('have.value', '0')
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