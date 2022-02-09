function scuberGreetingForFeet(some_value) {
    let response
    if (some_value <= 400) {
        response = 'This one is on me!';
    } else if (some_value > 2000 && some_value < 2500) {
        response = 'I will gladly take your thirty bucks.';
    } else if (some_value > 2500) {
        response = 'No can do.';
    }
    return response;
}

function ternaryCheckCity(destination) {
    let response
    if (destination == 'NYC') {
        response = 'Ok, sounds good.';
    } else return 'No go.';
    return response
}

function switchOnCharmFromTip(manners) {
    let response
    if (manners == 'generous') {
        response = 'Thank you so much.';
    } else if (manners == 'not as generous') {
        response = 'Thank you.';
    } else response = 'Bye.';
    return response
}