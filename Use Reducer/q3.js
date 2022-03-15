//Now, remove if/else and use a switch statement instead. Let's see how we write switch in JavaScript.

const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

const func = (acc, value) => {
  switch (value.type) {
    case "odd":
      return { ...acc, odd: acc.odd + value.payload };
    case "even":
      return { ...acc, even: acc.even + value.payload };
    default:
        return acc;
  }
};

const arrayOfObjects = numList.reduce(func, { odd: 0, even: 0 });
console.log(arrayOfObjects);
