describe('Testing Headers', function(){
    it('validate header content type', function(){
        cy.request('employees').its('headers').its('content-type').should('include', 'application/json');
    });
});