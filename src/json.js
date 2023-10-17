//json
//javaScript Object Notation
//1. Object to JSON
//JSON.stringify(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['apple', 'banana'])
console.log(json);
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol('id'),
    jump: () => {
        console.log(`${rabbit.name} can jump!`);
    },
};
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
//もう少し精密なコントロール
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key},value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);
//2.JSON to Object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key},value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();//jumpは読み取れてないので、
//obj.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//done