class Sorter {
  constructor() {
    // your implementation
	  this.arr = [];
	  this.leng = 0;
	  this.compareFunction = function(x,y)
     {
       return x-y;
     };
  }

  add(element) {
    // your implementation
	  this.arr.push(element);
	  this.leng++;
  }

  at(index) {
    // your implementation
	  return this.arr[index];
  }

  get length() {
    // your implementation
	  return this.leng;
  }

  toArray() {
    // your implementation
	  return this.arr;
  }

  sort(indices) {
    // your implementation
     let i;
	  var temp = [];
	  for(i=0; i<indices.length; i++){
		  temp.push(this.arr[indices[i]]);
	  }
	  temp.sort(this.compareFunction);
	  indices.sort(function(x,y) {return x-y});
	  for(i=0; i<indices.length; i++){
		  this.arr[indices[i]] = temp[i];
	  }
  }

  setComparator(compareFunction) {
    // your implementation
	  this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;