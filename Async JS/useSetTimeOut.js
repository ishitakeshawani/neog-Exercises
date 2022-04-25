// use setTimeOut()#
// challenge#
// Learn how to use setTimeout()
// Now, write a function that takes a message and a delay and print that message after the delay.

function func(msg, delay) {
  setTimeout(() => console.log(msg), delay);
}

func("hi everyone..", 1000);
// hi everyone..
