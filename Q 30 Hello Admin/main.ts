let userNames : string[] = ["Admin", "Inayatullah", "Khalil"]

userNames.forEach(userNames=>{
    if(userNames === "Admin") {
        console.log("Hello Admin, would you like to see status report?")
    }else{
        console.log(`Hello ${userNames},Thank you for logging in Plz Try Again`)
    }
});