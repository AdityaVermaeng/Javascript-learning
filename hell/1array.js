// //Array
const fav_players = ["Rohit Sharma", "Virat Kohli", "Sikhar Dhawan", "Jasprit Bumrah"]
const heros = ["Super Man", "Spider Man", "Bat Man "]
const myArr1 = new Array(0, 1, 2, 3, 4, 5)
    // console.log(fav_players[3])

// //console.log(myArr1)

// //Array method
// //fav_players.push("Hardik pandya")
// //fav_players.push("krunal pandya")
// //fav_players.push("manish pandey")
// //fav_players.pop()//remove element from last index
// fav_players.unshift("MS Dhoni")
// fav_players.shift() //just same as pop remove element form starting index
//console.log(fav_players.includes("Zahir Khan")) //for check element exist or not 
//console.log(fav_players.indexOf("Rohit Sharma"))
//const newArr = fav_players.join()
//console.log(fav_players);
//console.log(newArr)
//console.log(typeof newArr)

// git add .
// git commit -m "message"
// git push -u origin main


//slice and splice
console.log("A", myArr1)
const myArr0 = myArr1.slice(1, 3)
console.log(myArr0);
console.log("B", myArr1);
const myArr2 = myArr1.splice(1, 3) //it remove the splice portion from the original array
console.log("C", myArr1);
console.log(myArr2);