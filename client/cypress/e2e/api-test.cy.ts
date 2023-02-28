describe('test', () => {
    it('test', () => {

        cy.request("GET", "https://api.restful-api.dev/objects").then((response) => {
            expect(response.status).to.eq(200)
    })
})
})


