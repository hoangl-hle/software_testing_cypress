Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// before(function() // runs once before all tests in the block

// after(function() // runs once after all tests in the block

// beforeEach(function() // runs before each test in the block

// afterEach(function() { // runs after each test in the block
describe('Kiểm thử chức năng giao bài tập', function() {
  context('Kiểm thử  thử HL-GBT_51', function(){
    before(function(){
      cy.log('I run once time for every testcase !!!!!!')
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
      cy.log('Kiểm thử tính hợp lệ của box giờ')
    })
  
    it('HL-GBT_51 - 1 - Truncate bớt số chữ số đằng sau khi nhập số có hơn 2 chữ số', function(){

      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').clear()
      .type('240').should('have.value','24')
      cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
      cy.get(':nth-child(2) > .error-text').should('not.exist')
      cy.get('.toast-success').should('not.exist')

      cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').clear()
      .type('2399').should('have.value','23')
      cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
      cy.get(':nth-child(2) > .error-text').should('not.exist')
      cy.get('.toast-success').should('not.exist')
    })

    it('HL-GBT_51 - 2 - Nhập chữ vào ô giờ', function(){

      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').clear()
      .type('a').should('have.value','a')
      cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
      cy.get(':nth-child(2) > .error-text').should('exist')
    })
    it('HL-GBT_51 - 3 - Nhập số âm', function(){

      // Điền vào textbox số lần làm bài kí tự là chữ -> expect: không cho phép - không cho nhập được chữ 
      cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').clear()
      .type('-1').should('have.value','-1')
      cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
      cy.get(':nth-child(2) > .error-text').should('exist')
    })

    it('HL-GBT_51 - Nhập số vượt quá 24h vào ô giờ',function(){
      cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').clear()
      .type('2500')
      cy.get('form.ng-untouched > .modal-footer > .btn-primary').click()
      //cy.get(':nth-child(2) > div.form-group > .ng-untouched > table > tbody > :nth-child(2) > :nth-child(1) > .form-control').invoke('hasFocus').should('be.true')
      cy.get(':nth-child(2) > .error-text').should('exist')
      // no khong focus vao o do ma no focus vao o "Tạo", còn ô lỗi nó đơn giản chỉ tô màu đỏ -> không biết mã màu là gì để kiểm tra
      /*cy.get('[data-testid="StepsCard"]')
      .find('h2')
      .should('have.css', 'color').and('equal', '#663399');*/
      //cy.focused().should('have.value', '25');
    })

  })
});