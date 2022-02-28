"use strict";

const supertest = require("supertest");
const server = require("../src/server.js");
const request = supertest(server.app);

describe("Test the server", () => {

    it("Test the 404 in error path", async () => {
        const response = await request.get("/perso");
        expect(response.status).toEqual(404);
    });

    it("Test the 404 in error method", async () => {
        const response = await request.delete("/person");
        expect(response.status).toEqual(404);
    });

    it("Test the 200 with GET", async () => {
        const response = await request.get("/person");
        expect(response.status).toEqual(200);
    });

    it("Test the 200 with GET and param", async () => {
        const response = await request.get("/person/1");
        expect(response.status).toEqual(200);
    });

    it("Test the 201 with put", async () => {
        const response = await request.put("/person/1").send({ firstName: 'Nedal', lastName: 'AL-Qaisi' });
        expect(response.status).toEqual(201);
    });




    it("Test the 201 on with post", async () => {
        const response = await request.post("/food").send({ name: 'Kapsah', type: 'Favorite food' });
        expect(response.status).toEqual(201);
    });


    it("Test the 201 with Delete", async () => {
        const response = await request.delete('/food/1');
        expect(response.status).toEqual(200);
    })
});