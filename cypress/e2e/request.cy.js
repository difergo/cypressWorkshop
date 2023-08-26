describe('test request', ()=>{
    it('create employee', ()=>{
        cy.request({
            url: 'employees',
            method: 'POST',
            body:{
                first_name:'Javier Prueba',
                last_name:'Fernandez',
                email: 'javier2@platzi.com' 
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');

            const id = response.body.id;
            cy.wrap(id).as('id');
        });
    });

    it('validate employee was created in db', ()=>{
        cy.request('GET', 'employees').then(response=>{
            expect(response.body[response.body.length-1].first_name).to.eq('Javier Prueba');
        });
    });

    it('update employee email', function(){ //I tried this with arrow functions and the script was not able to find 'this.id' parammeter.
        cy.request({
            url: `employees/${this.id}`,//Interpolación de cadena `   `
            method: 'PUT',
            body:{
                first_name: 'Pepito',
                last_name: "Desarrollador",
                email: 'nuevo@email.com'
            }
        }).then(response=>{
            cy.log(response);
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
        });
    });

    it('delete employee', function (){
        cy.request({
            url: `employees/${this.id}`,
            method: 'DELETE'
        }).then(function(response){
            expect(response.status).to.eq(200);
        });
    })
});

//Arrow functions do not bind their own scope; instead, they inherit the one from the parent scope, called "lexical scoping".