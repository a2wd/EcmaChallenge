var assert = require("assert");
var one_array = require("./app.js");

describe("1_array", function(){
	describe("squares", function(){
		it("should return [1, 4, 9, 16, 25] given [1, 2, 3, 4, 5] as input", function(){
			//Arrange
			var input = [1, 2, 3, 4, 5];
			var expectedOutput = [1, 4, 9, 16, 25];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should return [25, 4, 81] given [5, 2, 9] as input", function(){
			//Arrange
			var input = [5, 2, 9];
			var expectedOutput = [25, 4, 81];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should return [] given [] as input", function(){
			//Arrange
			var input = [];
			var expectedOutput = [];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should throw an exception when the input is missing", function(){
			//Arrange
			var input = null;
			function checkForError() {
				one_array.squares(input);
			};


			//Assert
			assert.throws(checkForError, Error);
		});
	});
});