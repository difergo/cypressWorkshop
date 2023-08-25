describe('test statuses', ()=>{
    
    it('validate successfull status code', ()=>{
        cy.request('employees').its('status').should('eq', 200);
    });

    it('validate failed status code', ()=>{
        cy.request({url: 'employees/10', failOnStatusCode: false}).its('status').should('eq', 404);
    });
});