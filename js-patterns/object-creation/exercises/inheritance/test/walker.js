var assert = require("assert");

var Walker = require("../src/walker");

describe("Walker", function () {

    it.skip("must be a function", function () {

        assert(typeof Walker === "function");
    });

    it.skip("must construct objects with prototypes: Walker.prototype", function () {

        var initialOxygen = 2;
        var legs = 2;

        var walker = new Walker(initialOxygen, legs);

        var actual   = Object.getPrototypeOf(walker);
        var expected = Walker.prototype;

        assert(actual === expected);
    });

    it.skip("must throw an error if the amount of legs provided is not a number", function () {

        assert.throws(function () {

            var initialOxygen = 2;
            var legs = undefined;

            var walker = new Walker(initialOxygen, legs);
        });
    });

    it.skip("must throw an error if the amount of legs provided is zero", function () {

        assert.throws(function () {

            var initialOxygen = 2;
            var legs = 0;

            var walker = new Walker(initialOxygen, legs);
        });
    });

    it.skip("must throw an error if the amount of legs provided is an odd number", function () {

        assert.throws(function () {

            var initialOxygen = 2;
            var legs = 1;

            var walker = new Walker(initialOxygen, legs);
        });
    });

    it.skip("must not throw any error if the amount of legs provided is an even number greater than zero", function () {

        assert.doesNotThrow(function () {

            var initialOxygen = 2;
            var legs = 2;

            var walker = new Walker(initialOxygen, legs);
        });
    });

    describe("prototype", function () {

        describe(".getLegs(): number", function () {

            it.skip("must return the number of legs provided in the initialization", function () {

                var initialOxygen = 2;
                var legs = 2;

                var walker = new Walker(initialOxygen, legs);

                var actual   = walker.getLegs();
                var expected = legs;

                assert(actual === expected);
            });
        });

        describe(".getSteps(): number", function () {

            it.skip("must return 0 if it walk has not yet been invoked", function () {

                var initialOxygen = 2;
                var legs = 2;

                var walker = new Walker(initialOxygen, legs);

                var actual   = walker.getLegs();
                var expected = legs;

                assert(actual === expected);
            });
        });

        describe(".walk()", function () {

            it.skip("must increment the amount of steps by 1", function () {

                var initialOxygen = 2;
                var legs = 2;

                var walker = new Walker(initialOxygen, legs);

                walker.walk();

                var actual   = walker.getSteps();
                var expected = 1;

                assert(actual === expected);
            });
        });
    });
});