module.exports = {
	Node: Node,
	invertBinaryTree: invertBinaryTree
}

function Node(value) {
	if(typeof value === "undefined" || value === null) {
		throw Error("Undefined");
	}

	if(value.constructor === Array) {
		if(value.length > 1) {
			this.value = value.shift();

			this.left = new Node(value.splice(0, Math.ceil(value.length / 2)));
			this.right = null;

			if(value.length > 0) {
				this.right = new Node(value);
			}

			return;
		}

		//Unwrap array
		if(typeof value[0] === "undefined" || value[0] === null) {
			throw Error("No value");
		}

		value = value[0];
	}

	this.value = value;
	this.left = null;
	this.right = null;

	return;
}

Node.prototype.toString = function() {
	var leftVal = this.left === null ? "" : this.left.toString();
	var rightVal = this.right === null ? "" : this.right.toString();

	return this.value + leftVal + rightVal;
}

function invertBinaryTree(tree) {
	//Code
}