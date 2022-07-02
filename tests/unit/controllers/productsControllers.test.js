const sinon = require("sinon");
const { expect } = require("chai");

const services = require("../../../services/storeService");
const controllers = require("../../../controllers/storeController");

describe("testa a função getAll da controller: ", () => {
  describe("se nao houver retorno:", () => {
    const req = {};
    const res = {};

    beforeEach(() => {
      const resul = [];
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services, "getAll").resolves(resul);
    });

    afterEach(() => {
      services.getAll.restore();
    });

    it("retorna codigo 200 e array vazio", async () => {
      await controllers.getAll(req, res);
      expect(res.status.calledWith(200)).to.equal(true);
      expect(res.json.calledWith([])).to.equal(true);
    });
  });

  describe("se houver retorno", () => {
    const req = {};
    const res = {};
    const resul = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
    ];

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services, "getAll").resolves(resul);
    });

    afterEach(() => {
      services.getAll.restore();
    });

    it("retorna uma lista", async () => {
      await controllers.getAll(req, res);
      expect(res.status.calledWith(200)).to.equal(true);
      expect(res.json.calledWith(resul)).to.equal(true);
    });
  });
});

describe("testa a função getById da controller", () => {
  describe("se retorno do objeto der certo", () => {
    const req = {};
    const res = {};
    const resul = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
    ];

    beforeEach(() => {
      req.params = 1
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services, "getById").resolves(resul);
    });

    afterEach(() => {
      services.getById.restore();
    });

    it('retorna um array com chave "id" e "name"', async () => {
      await controllers.getById(req, res);
      expect(res.status.calledWith(200)).to.equal(true);
      expect(res.json.calledWith(resul)).to.equal(true);
    })
  });
});
