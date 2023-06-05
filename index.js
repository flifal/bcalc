const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputs = document.querySelectorAll("input");

function inputNum() {
    inputs.forEach((input) =>
        input.addEventListener("keypress", function (event) {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        })
    );
}

inputNum();
function num() {
    month.addEventListener("keypress", function (event) {
        if (month.value.length >= 2) {
            event.preventDefault();
            console.log("Month input exceeded maximum length");
        }
    });
    day.addEventListener("keypress", function (event) {
        if (day.value.length === 2) {
            event.preventDefault();
            console.log("Day input exceeded maximum length");
        }
    });

    year.addEventListener("keypress", function (event) {
        if (year.value.length === 4) {
            event.preventDefault();
            console.log("Year input exceeded maximum length");
        }
    });
}

num();

day.addEventListener("input", function () {
    if (day.value.length >= 2) {
        month.focus();
    }
    let value = day.value;

    // Remove any non-digit characters from the input
    value = value.replace(/\D/g, "");

    // Limit the input to two characters
    value = value.slice(0, 2);

    // Update the input value
    input.value = value;
});
month.addEventListener("input", function () {
    if (month.value.length >= 2) {
        year.focus();
    }
    let value = month.value;

    // Remove any non-digit characters from the input
    value = value.replace(/\D/g, "");

    // Limit the input to two characters
    value = value.slice(0, 2);

    // Update the input value
    input.value = value;
});
year.addEventListener("input", function () {
    let value = year.value;

    // Remove any non-digit characters from the input
    value = value.replace(/\D/g, "");

    // Limit the input to two characters
    value = value.slice(0, 2);

    // Update the input value
    input.value = value;
});

// const input = document.getElementById("myInput");

// input.addEventListener("input", function () {
//     let value = input.value;

//     // Remove any non-digit characters from the input
//     value = value.replace(/\D/g, "");

//     // Limit the input to two characters
//     value = value.slice(0, 2);

//     // Update the input value
//     input.value = value;
// });
