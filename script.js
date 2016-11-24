// JavaScript for handling events

var userOrder = [];

function handleLocationSelection(name, location) {
// Function checks if location has been booked and if it is not it allows the user to make a booking also includes basic error checking
// The booking is then confirmed by the user and the location is 'redded-out'
// This may not be the best function name, but it will do for now
    var room_id = document.getElementById(name);
    if (room_id.style.fill == "red") {
        alert("Sorry, this has been booked");
    } else if (room_id.style.fill == "yellow") {
        alert("This booking needs to be confirmed")
    } else {
        var days = window.prompt("Enter how many days").trim();
        if (days != "" && days != null) {
            var cost = days * 25;
            if (window.confirm("Your booking is for " + days + " days. This will cost a total of: $" + cost + ". Press OK to confirm.") == true) {
                document.getElementById("cart-box-order").innerHTML = document.getElementById("cart-box-order").innerHTML + "<p>" + location + " for " + days + " days: $" + cost + "</p>";
                //text(location + " for " + days + " days: $" + cost);
                //$("#cart-box").text(location + " for " + days + " days: $" + cost);
                room_id.style.fill = "yellow";
                userOrder.push(room_id)
            }
        }
        else {
            window.alert("Please enter a valid booking duration")
        }
    }
}

function submitOrder() {
    var i;
    for (i = 0; i < userOrder.length; i++) {
        userOrder[i].style.fill = "red"
    }
   // if (userOrder != false) {
        //alert(userOrder == true);
    alert("Thank you for your booking!");
    $("#cart-box-order").text("")

}