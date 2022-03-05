/// <reference types="cypress" />
function myDisplayer(some) {
    console.log("in display");
    console.log(some);
}


describe("JSON Object", () => {
    it("Json Object Examples", () => {



        let myPromise = new Promise(function(myResolve, myReject) {
            let x = 120;

// some code (try to change x to 5)

            if (x == 0) {
                myResolve("OKe");
            }
            if (x == 10) {
                myReject("Error");
            }

        });

        myPromise.then(
            function(value) {myDisplayer(value);},
            function(error) {myDisplayer(error);},
        );



        cy.log("hoi")
    });
})
