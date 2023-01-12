document.querySelector('#check').addEventListener('click', checkDay)

document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {
    let day = document.querySelector('#day').value.toLowerCase();
    let message = '';

    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            message = "It's a weekday!";
            break;
        case "saturday":
        case "sunday":
            message = "It's the weekend!";
            break;
        default:
            message = "Invalid input. Please enter a day of the week.";
            break;
    }

    document.querySelector('#placeToSee').innerText = message;
}

