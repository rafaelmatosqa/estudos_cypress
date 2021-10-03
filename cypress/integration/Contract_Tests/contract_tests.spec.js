import  contractUsers  from '../Contract_Tests/contracts/contracts';
describe("USUÁRIOS", () => {
  it("Listar usuários cadastrados", () => {
    cy.request({
      method: "GET",
      url: "/api/users?page=2",
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      const qtdeUsuarios = res.body.data;
      cy.expect(res.status).to.be.eq(200);
      cy.expect(res.body.data).to.be.eq(qtdeUsuarios);
      cy.log('Lista de usuários',res.body)
    });
  });

  it("Validar contrato da lista de usuários", () => {
    cy.request({
      method: "GET",
      url: "/api/users?page=2",
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).as("response");

    cy.get("@response").then((res) => {
      cy.request({
        method: "GET",
        url: "/api/users?page=2",
        failOnStatusCode: false,
        headers: {
          accept: "application/json",
        },
      }).as("resContract");

      cy.get("@resContract").then((response) => {
        cy.expect(response.status).to.be.eq(200);
        contractUsers.validateAsync(response.body);
      });
    });
  });
});
