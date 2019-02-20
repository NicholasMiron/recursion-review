// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringified = '';
  if (typeof(obj) === 'number') { 
    stringified += obj;
  } else if (obj === null) {
    stringified += null;
  } else if (typeof(obj) === 'boolean') {
    stringified += obj;
  } else if (typeof(obj) === 'string') {
    stringified += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if(obj.length === 0) {
      stringified += '[]';
    } else {
      stringified += '[';
      for(var i = 0; i < obj.length; i++) {
        if(i === obj.length - 1) {
          stringified += stringifyJSON(obj[i]);
        } else {
          stringified += stringifyJSON(obj[i]) + ',';
        }
      }
      stringified += ']';
    }
  } else if(typeof(obj) === 'object') {
    if(Object.keys(obj).length === 0) {
      stringified += '{}';
    } else {
      stringified += '{';
      var count = 0;
      for(var key in obj) {
        if(typeof(obj[key]) !== 'function' && obj[key] !== undefined) {
          stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          if(count !== Object.keys(obj).length - 1) {              
            stringified += ',';
          }
          count++;
        }
      }
      stringified += '}';
    }
  }
  return stringified;
};
