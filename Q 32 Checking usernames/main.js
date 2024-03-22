var currentUsers = ["Inayat", "Ali", "Ahmed"];
var newUsers = ["Waqar", "Sarmad", "Asad"];
newUsers.forEach(function (newUsers) {
    if (currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, "will need to enter a new username"));
    }
    else {
        console.log("".concat(newUsers, " is available. "));
    }
});
