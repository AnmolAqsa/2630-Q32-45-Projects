/*
Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

* Make a list of five or more usernames called current_users.

* Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

* Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

* Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ["Anmol", "Atif", "Arman", "aliya", "Ayaan"];
var new_users = ["Anmol", "Marium", "atif", "Kulsoom", "Farah"];
// new_users.forEach((new_one_users =>
//     {
//     let our_condition = current_users.some(current_new_one => current_new_one.toLowerCase())
//     if(our_condition){
//         console.log(`Sorry ${new_one_users} is already been used.`);
//     }else {
//         console.log(`This ${new_one_users} is available.`);
//     }
// }
// ))
var lower_case_new_users = [""];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    new_user.toLocaleLowerCase();
    lower_case_new_users.push(new_user);
}
for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
    var current_user = current_users_1[_a];
    var lower_case_new_user = current_user.toLocaleLowerCase();
    if (lower_case_new_users.indexOf(lower_case_new_user) !== -1) {
        console.log("username ".concat(current_user, " is not available"));
    }
    else {
        console.log("username ".concat(current_user, " is  available"));
    }
}
