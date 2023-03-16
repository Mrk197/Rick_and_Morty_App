const app = require('../routes/index');
const session = require('supertest');
const agent = session(app);

describe( "Test de RUTAS", () => {
    describe('GET rickandmorty/{id}', () => {
        it('Responde con status: 200', async () =>{
            await agent.get('/rickandmorty/onsearch/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"',async () =>{
            const response = await agent.get('/rickandmorty/onsearch/1').expect(200);
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("image");
        });
        it("Si hay un error responde con status: 500", async () =>{
            const response = await agent.get('/rickandmorty/onsearch/1000');
            return expect(response.statusCode).toBe(500);
        });
    });
    describe("Get/detail/{id}", async () => {
        it('Responde con un status 200', async () => {
            await agent.get('/rickandmorty/detail/1').expect(200);
        })
        
    });
});