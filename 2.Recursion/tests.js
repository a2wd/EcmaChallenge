var assert = require("assert");
var two_recursion = require("./app.js");
var large_value = require("./largeValue.js");

describe("2_recursion", function(){
	it("should correctly invert a regular binary tree", function(){
		//Arrange
		var binaryTree = new two_recursion.Node([1,2,3,4,5,6,7,8,9]);
		var expectedOutput = "169782534";

		//Act
		two_recursion.invertBinaryTree(binaryTree);
		var output = binaryTree.toString();

		//Assert
		assert.equal(expectedOutput, output);
	});

	it("should correctly invert a single node", function(){
		//Arrange
		var binaryTree = new two_recursion.Node(1);
		var expectedOutput = "1";
		
		//Act
		two_recursion.invertBinaryTree(binaryTree);
		var output = binaryTree.toString();

		//Assert
		assert.equal(expectedOutput, output);
	})

	it("should correctly invert a large binary tree", function(){
		//Arrange
		var inputArray = [];
		for(var i = 0; i < 1000; i++) {
			inputArray.push(i);
		}

		var binaryTree = new two_recursion.Node(inputArray);
		var expectedOutput = large_value.val;

		//Act
		two_recursion.invertBinaryTree(binaryTree);
		var output = binaryTree.toString();

		//Assert
		assert.equal(expectedOutput, output);
	});

	it("should work for irregular trees", function() {
		//Arrange
		var binaryTree = new two_recursion.Node([5,7,1,8,3,9,3,7,3,12,87,12,3,56,2]);
		var expectedOutput = "5332561212877973138";

		//Act
		two_recursion.invertBinaryTree(binaryTree);
		var output = binaryTree.toString();

		//Assert
		assert.equal(output, expectedOutput);
	})

	it("should throw an error when not provided with an input tree", function(){
		//Arrange
		var input = null
		function checkForError() {
			two_recursion.invertBinaryTree(input);
		}

		//Assert
		assert.throws(checkForError, Error);
	})
});