const sinon = require("sinon");
const { expect } = require("chai");

const models = require("../../../models/storeModel");
const services = require("../../../services/storeService");

describe("testa a função getAll", () => {
  describe("retorna array vazio se os dasdos nao forem peenchidos", () => {
    beforeEach(() => {
      const result = [];
      sinon.stub(models, "getAll").resolves(result);
    });
    afterEach(() => {
      models.getAll.restore();
    });

    it("retorna um array vazio", async () => {
      const response = await services.getAll();
      expect(response).to.be.an("array").that.is.empty;
    });
  });

  describe("retorna array com os dados do banco", () => {
    const resul = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
      {
        id: 2,
        name: "Traje de encolhimento",
      },
    ];

    beforeEach(() => {
      sinon.stub(models, "getAll").resolves(resul);
    });

    afterEach(() => {
      models.getAll.restore();
    });

    it("o objeto dentro do array tem as chaves 'id' e 'name'", async () => {
      const response = await services.getAll();
      expect(response).to.be.an("array").that.be.equal(resul);
    });
  });
});

describe("teste função getById", () => {
  describe("quando retorna dados do banco", () => {
    const resul = [
      {
        id: 2,
        name: "Traje de encolhimento",
      },
    ];

    beforeEach(() => {
      sinon.stub(models, "getById").resolves(resul);
    });

    afterEach(() => {
      models.getById.restore();
    });

    it('retorna um array com chave "id" e "name"', async () => {
      const response = await services.getById();
      expect(response).to.deep.equal(...resul);
    });
  });

  describe("quando retornar array vazio:", () => {
    const resul = [];
    beforeEach(() => {
      sinon.stub(models, "getById").resolves(resul);
    });

    afterEach(() => {
      models.getById.restore();
    });

    it('retorna um message error "Product not found"', async () => {
      try {
        await services.getById();
      } catch (err) {
        expect(err.message).to.equal('Product not found');
      }
    });
  });
});
