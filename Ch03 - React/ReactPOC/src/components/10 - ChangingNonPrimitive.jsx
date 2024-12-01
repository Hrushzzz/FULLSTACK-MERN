// const [user, setUser] = useState({name:"Hrishi", age: 25});   //passing an Object   --> address ***4K***

// let updatedUser = {...user , name: "Nani"};  
// This creates a new updatedUser at address ***8K ***, and changes its name to "Nani".

// name: "Hrishi" --> this will be removed,
// age: 25,
// name: 25 --> this will be updated.

// As soon as the address is changed, REACT notices about that change and then re-renders it.