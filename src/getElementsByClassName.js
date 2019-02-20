// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode) {
  var nodesWithClassName = [];
  currentNode = currentNode || document.body;
  if(currentNode.classList.contains(className)) {
    nodesWithClassName.push(currentNode);
  }
  for(var i = 0; i < currentNode.childElementCount; i++) {
    var result = getElementsByClassName(className, currentNode.children[i]);
    nodesWithClassName = nodesWithClassName.concat(result);
  }
  return nodesWithClassName;
};
