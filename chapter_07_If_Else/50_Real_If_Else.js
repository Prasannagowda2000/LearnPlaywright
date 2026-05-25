let isLoggedIn = true;
let userRole = "asdad"

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome admin");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor");
    }
    else {
        console.log("Welcome user");
    }
}
else {
    console.log("Please log in");
}

