Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Kiểm thử chức năng giao bài tập', function() {
  context('Kiểm thử HL-GBT_26', function(){
    before(function(){
      cy.log('Đăng nhập bằng tài khoản giáo viên')
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
      cy.log('Cảnh báo lỗi Số lần làm lại phải lớn hơn hoặc bằng 0')
    })
    it('HL-GBT_26 - 1: Nhập vào ô số lần làm bài', function(){
      var i = -1
      cy.log('--------số âm '+ i)
      cy.get(':nth-child(7) > .form-control').clear().type(i).should('have.value',i.toString())
      cy.get('form.ng-valid > .modal-footer > .btn-primary').click()
      //cy.contains('Tạo').click()
      
      cy.get('.toast-error').should('exist')
      cy.get('.toast-message').should('exist')
      //cy.contains('Số lần làm lại phải lớn hơn hoặc bằng 0').should('exist') 
      
    })
    it('HL-GBT_26 - 2: Nhập vào ô số lần làm bài', function(){
      cy.wait(5000)
      var i = -100
      cy.log('--------số âm '+ i)
      cy.get(':nth-child(7) > .form-control').clear().type(i).should('have.value',i.toString())
      cy.get('form.ng-valid > .modal-footer > .btn-primary').click()
      //cy.contains('Tạo').click()
      
      cy.get('.toast-error').should('exist')
      cy.get('.toast-message').should('exist')
      //cy.contains('Số lần làm lại phải lớn hơn hoặc bằng 0').should('exist') 
    })
    it('HL-GBT_26 - 3: Nhập vào ô số lần làm bài', function(){
      cy.wait(5000)
      var i = -1000
      cy.log('--------số âm '+ i)
      cy.get(':nth-child(7) > .form-control').clear().type(i).should('have.value',i.toString())
      cy.get('form.ng-valid > .modal-footer > .btn-primary').click()
      //cy.contains('Tạo').click()
      
      cy.get('.toast-error').should('exist')
      cy.get('.toast-message').should('exist')
      //cy.contains('Số lần làm lại phải lớn hơn hoặc bằng 0').should('exist') 
      
    })
  })
});