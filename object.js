const Object1 = {
    name: "Harshada",
    count: [1, 2, 3, 4, 5]
};

function changeName() {
    Object1.name = "Harshu";
    const multiply = (x, y) => x * y;
    return multiply;
}

const result = changeName()(2, 3);

const object2 = {
    ...Object1,
  
    date: function getCurrentDateTime() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
      const day = ('0' + currentDate.getDate()).slice(-2);
  
      return `${year}-${month}-${day}`;
    },
    
};

console.log(Object1);

changeName();

Object1.date = object2.date();

console.log(Object1);
console.log(result);
console.log(object2);
console.log(object2.date());
