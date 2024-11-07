const PI = 3.14; // because the PI is d
//let radius = 3;
let area = 0;

//console.log("area1", area);
//console.log("area2", area);

const circleArea = (radius) => {
  area = radius * radius * PI;
  return area;
};

area = circleArea(3);
console.log("area of the triangle with 3 of radius is:", area);
//radius = 4;

area = circleArea(4);

console.log("area2", area);
