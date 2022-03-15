// Change the program to accommodate an array of objects. The object will have two keys: type and payload. The type will tell you whether the number is even or odd and the payload will have the number.
 // Q: modify your reducer function to accommodate this.

const numList = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
  ]

const func = (acc,value) =>{
    if(value.type === 'odd'){
        return {...acc,odd:acc.odd+value.payload}
    }
    return {...acc,even:acc.even+value.payload}
}

const arrayOfObjects = numList.reduce(func,{odd:0,even:0});
console.log(arrayOfObjects);