describe('testing error messages', ()=>{

    it('validate failed status code and error message', function (){
        cy.request({url: 'https://pokeapi.co/api/v2/4545', failOnStatusCode: false})
        .then( response=>{{
            expect(response.status).to.eq(404);
            expect(response.body).to.be.eq('Not Found');
        }});
    });

    it('validate failed status code and error message 2', function (){
        cy.request({url: 'https://rickandmortyapi.com/api/location/938504', failOnStatusCode: false})
        .then( response=>{{
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('error', 'Location not found');
        }});
    });

});