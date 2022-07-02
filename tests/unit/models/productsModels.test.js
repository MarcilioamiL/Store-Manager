const sinon = require("sinon");
const { expect } = require("chai");

const connection = require("../../../models/connection");
const models = require("../../../models/storeModel");

describe("testa a função getAll", () => {
  describe("retorna array vazio se os dasdos nao forem peenchidos", () => {
    const resul = [[]];

    beforeEach(() => {
      sinon.stub(connection, "execute").resolves(resul);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it("array vazio", async () => {
      const resul = await models.getAll();
      expect(resul).to.be.an("array");
    });
  });

  describe("retorna array com os dados do banco", () => {
    describe('o objeto tem as chaves "id" e "name"', () => {
      const resul = [
        [
          {
            id: 1,
            name: "Martelo de Thor",
          },
        ],
      ];

      beforeEach(() => {
        sinon.stub(connection, "execute").resolves(resul);
      });

      afterEach(() => {
        connection.execute.restore();
      });

      it("retorna um array de objetos", async () => {
        const resul = await models.getAll();
        expect(resul).to.be.an("array");
      });

      it('o objeto dentro do array tem as chaves "id" e "name"', async () => {
        const [resul] = await models.getAll();
        expect(resul).to.have.all.keys("id", "name");
      });
    });
  });
});

describe("testa a função getById", () => {
  describe("retorna array vazio se os dasdos nao forem peenchidos", () => {
    const resul = [[]];

    beforeEach(() => {
      sinon.stub(connection, "execute").resolves(resul);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it("retorna um array vazio", async () => {
      const resul = await models.getById();
      expect(resul).to.be.an("array");
    });
  });

  describe("caso obtenha dados", () => {
    describe("o objeto tem que:", () => {
      const resul = [
        [
          {
            id: 1,
            name: "Martelo de Thor",
          },
        ],
      ];

      beforeEach(() => {
        sinon.stub(connection, "execute").resolves(resul);
      });
      afterEach(() => {
        connection.execute.restore();
      });

      it("retorna um array de objetos", async () => {
        const resul = await models.getById();
        expect(resul).to.be.an("array");
      });

      it('retorna um array com chave "id" e "name"', async () => {
        const [resul] = await models.getById();
        expect(resul).to.have.all.keys("id", "name");
      });
    });
  });
});
