import request from "supertest";
import app from "../app";

const agent = request.agent(app);

describe("/GET /api/whoami", () => {
    it("should return client's IP Address, Language and System Infos", () => {
        return request(app).get("/api/whoami")
            .then((res) => {
                expect(res.body).toBeInstanceOf(Object);
                expect("ipaddress" in res.body).toBe(true);
                expect("language" in res.body).toBe(true);
                expect("software" in res.body).toBe(true);
            })
    })
});
