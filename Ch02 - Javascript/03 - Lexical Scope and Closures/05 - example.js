
var r = 4

function calculateValue(){
   function area(){
    let area = 3.14*r*r;
    console.log("Area is : ", area);
    function perimeter(){
       let perimeter = 2*3.14*r;
       console.log("Perimeter is : " , perimeter)
    }
    return perimeter
   }
   return area;
}

const area = calculateValue();
const perimeter= area();
perimeter();