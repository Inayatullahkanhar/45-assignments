let currentUsers : string[] = ["Inayat", "Ali","Ahmed"];
let newUsers : string[] = ["Waqar", "Sarmad","Asad"];
 newUsers.forEach(newUsers => {
    if(currentUsers.some(currentUsers => currentUsers.toLowerCase()=== newUsers.toLowerCase())) {
        console.log(`${newUsers}will need to enter a new username`)
    }else {
        console.log(`${newUsers} is available. `);
    }
    
});