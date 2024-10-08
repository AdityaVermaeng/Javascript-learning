 //singleton
 //object.create//constructor methood
 //object literalsconst mySym = Symbol("key1");
 const mySym = Symbol("key1")
 const jsUser = {
     name: "Aditya",
     "fullname": "Aditya Verma",
     email: "xyz@gmail.com",
     [mySym]: "mykey1", // Corrected symbol assignment
     id: 13,
     location: "Gorakhpur",
     isloggedin: true,
     'loggedtime': ["Monday", "Thursday"]
 };

 console.log(jsUser["email"]); // Access by string key
 console.log(jsUser.email); // Dot notation
 console.log(jsUser["fullname"]); // Access by string key
 console.log(jsUser[mySym]); // Access by Symbol key