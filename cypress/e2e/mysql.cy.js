describe('testing database', () => {

    it('select',()=>{
        cy.task('queryTestDb',"select * from people;").then((response)=>{
            cy.log(response)
        })

    })
})