describe('testing database', () => {

    after('Actions after tests', ()=>{
        cy.log("something like drop the tests db");
    });

    it('insert',()=>{
        cy.task('queryTestDb',"INSERT INTO people(id, name) VALUES(11, 'test name 2')").then((response)=>{
            cy.log(response);
            expect(response.affectedRows).to.eq(1);
        })

    });

    it('Delete',()=>{
        cy.task('queryTestDb',"DELETE FROM people WHERE id=11").then((response)=>{
            cy.log(response);
            expect(response.affectedRows).to.eq(1);
        })

    });

    it('select',()=>{
        cy.task('queryTestDb',"select * from people;").then((response)=>{
            cy.log(response);
        })

    })
})