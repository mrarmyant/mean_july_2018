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

var first = new BST();
first.insert(30).insert(20).insert(40);
first.insert(3);
first.insert(52);
first.insert(31);
first.insert(82);
first.insert(60);
first.insert(44);
first.insert(18);

console.log(first);
