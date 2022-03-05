/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleObject2 = {"key3": "Piet", "key4": "Wim"}
        const users = {
            "firstName" : "Jan",
            "lastName" : "Tijhuis",
            "students" : [
                {
                    "firstName" : "Jeroen",
                    "lastName" : "Tijhuis1",
                },
                {
                    "firstName" : "Leonie",
                    "lastName" : "Tijhuis2",
                },
            ]
        }

        const arrayOfObjects = [{"key": "Tim", "key2": "Jones"}, {"key3": "Piet", "key4": "Wim"} ]

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2) //Jones
        cy.log(exampleObject.key)
        cy.log(users.students[1].lastName)
        cy.log(arrayOfObjects[0].key3)
    });
})
