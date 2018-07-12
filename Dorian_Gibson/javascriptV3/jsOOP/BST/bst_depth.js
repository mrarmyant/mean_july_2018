function BST(){
  this.root = null;
}

function Node(val){
  this.val =val;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(val){
  var root = this.root;

  if(!root){
    this.root = new Node(val);
    return this;
  }

  var x = root;
  var newNode = new Node(val);

  while(x){
    if(val < x.val){
      if(!x.left){
        x.left = newNode;
        return this;
      }
      else{
        x = x.left;
      }
    }
    else{
      if(!x.right){
        x.right = newNode;
        return this;
      }
      else{
        x = x.right;
      }
    }
  }
};

BST.prototype.preOrderTraversal = function (root) {
  console.log(root.val);
  if (root.left) {
    this.preOrderTraversal(root.left);
  }
  if (root.right) {
    this.preOrderTraversal(root.right);
  }
};

BST.prototype.inOrderTraversal = function (root) {
  if (root.left) {
    this.inOrderTraversal(root.left);
  }
  console.log(root.val);
  if (root.right) {
    this.inOrderTraversal(root.right);
  }
};

BST.prototype.postOrderTraversal = function (root) {
  if (root.left) {
    this.postOrderTraversal(root.left);
  }
  if (root.right) {
    this.postOrderTraversal(root.right);
  }
  console.log(root.val);
};

var maxDepth = function(root) {
  var x = [{ node: root, depth: 1 }];
  var current = x.pop();
  var max = 0;
  while (current && current.node) {
    var node = current.node;
    if (node.left) {
      x.push({ node: node.left, depth: current.depth + 1 });
    }
    if (node.right) {
      x.push({ node: node.right, depth: current.depth + 1 });
    }
    if (current.depth > max) {
      max = current.depth;
    }
    current = x.pop();
  }
  return max;
};

var first = new BST();
first.insert(30).insert(20).insert(40);
first.insert(3);
first.insert(52);
first.insert(31);
first.insert(82);
first.insert(60);
first.insert(44);
first.insert(18);

first.preOrderTraversal(first.root);
console.log('***********');
first.inOrderTraversal(first.root);
console.log('***********');
first.postOrderTraversal(first.root);
console.log('***********');
maxDepth(first);
