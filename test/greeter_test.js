const GreeterContract = artifacts.require("Greeter");

contract("Greeter", (accounts) => {
    it("Has been deployed successfully", async () => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed");
    });
    describe("greet()", () => {

        it("returns 'Hello world'", async () => {
            const greeter = await GreeterContract.deployed();
            const expected = "Hello world";
            const actual = await greeter.greet();

            assert.equal(actual, expected, "greeted with Hello world");
        });
    });

    describe("owner()", () => {
        it("returns the owner address", async () => {
            const greeter = await GreeterContract.deployed();
            const owner = await greeter.owner();

            assert(owner, "Contract owner");
        })
    })
    it("Check if owner address is equal to account that deployed contract", async () => {
        const greeter = await GreeterContract.deployed();
        const owner = await greeter.owner();
        const expected = accounts[0];
        console.log(owner);
        console.log(accounts[0]);
        assert.equal(owner, expected, 'Both address matches')

    });

});



contract("Greeter: update greeting", () => {
    describe("setGreeting(string)", () => {
        it('sets our greet value to what is passed in', async () => {
            const greeter = await GreeterContract.deployed();
            const expected = "Hi there";
            await greeter.setGreeting(expected);
            const actual = await greeter.greet();

            assert.equal(actual, expected, 'Good to go');
        })
    })

    describe("when message is sent by another account", () => {
        it("does not set the greeting", async () => {
            const greeter = await GreeterContract.deployed()
            const expected = await greeter.greet();
            try {
                await greeter.setGreeting("Not the owner", { from: accounts[1] });
            } catch (err) {
                const errorMessage = "Ownable: caller is not the owner"
                assert.equal(err.reason, errorMessage, "greeting should not update");
                return;
            }
            assert(false, "greeting should not update");
        });
    });

})