Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Kiểm thử chức năng giao bài tập', function() {
  context('Kiểm thử HL-GBT_15', function(){
    it('Tồn tại nút giao bài tập cho tài khoản giáo viên', function(){
      cy.log('Đăng nhập bài tài khoản giáo viên')
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
      // cy.contain('Lớp 12').click()

      // click "Trắc nghiệm Địa lí 12 (2018)"
      cy.get(':nth-child(24) > .row > .col-9 > .text-dark').click()

      // Chờ load xong trang giao bài tập để hiện thị nút "Giao bài tập"
      cy.wait(timeWaitToLoadPage*2)

      //cy.visit('https://hoclieu.sachmem.vn/question_set/5ba64979c676f8880d7086b0/5c075a3ec997c55926f0395c/preview');
      cy.get('.pull-right > .btn').should('exist')
      // cy.contains('Giao bài tập').should('exist')
    })
  
    it('Không tại nút giao bài tập cho tài khoản học sinh', function(){
      cy.log('Đăng nhập bài tài khoản học sinh')
      const timeWaitToLoadPage = 6000
      const _password = 123456789
      const _username = 'jobjob1st@gmail.com'
      cy.visit('https://hoclieu.sachmem.vn/');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type(_username); // type email
      cy.get('#user_password').type(_password); // type password
      cy.get(':nth-child(6) > .btn').click()
      cy.wait(timeWaitToLoadPage)

      // click "Lớp 12"
      cy.get(':nth-child(14) > .row > .col-9 > .text-dark').click()
      //cy.contain('Lớp 12').click()

      // click "Trắc nghiệm Địa lí 12 (2018)"
      cy.get(':nth-child(24) > .row > .col-9 > .text-dark').click()

      // Chờ load xong trang giao bài tập để hiện thị nút "Giao bài tập"
      cy.wait(timeWaitToLoadPage*2)

      //cy.visit('https://hoclieu.sachmem.vn/question_set/5ba64979c676f8880d7086b0/5c075a3ec997c55926f0395c/preview');
      cy.get('.pull-right > .btn').should('not.exist')
      // cy.contains('Giao bài tập').should('not.exist')
    })
  })
});