const request = require("supertest");
const app = require("../src/app");

describe("Verify Users Routes", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/users");
        expect(response.statusCode).toBe(200);
    });
    test("It should response the POST method", async () => {
        const response = await request(app).post("/users").send({
            name: 'Teste',
            password: 'Teste',
            email: 'teste@teste.com'
        });
        expect(response.statusCode).toBe(200);
    });
});