describe("test connection with mongodb", () => {

    after(()=>{
        cy.task("clearPlanets");
    });

    it("mongo db insert", () => {
        cy.task("mongoCreatePlanet", {
            name: "Planeta7",
            orderFromSun: { $numberInt: "7" },
            hasRings: true,
            mainAtmosphere: ["H2", "He", "CH4"],
            surfaceTemperatureC: {
                min: null,
                max: null,
                mean: { $numberDouble: "-197.2" },
            }
        });
    });

    it("mongo db select", function () {

        cy.task("getPlanets").then((result) => {
            cy.log(result);
        });
    });
});