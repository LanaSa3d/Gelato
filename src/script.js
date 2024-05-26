
/*Contact*/
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('contactForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        var alertMessage = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message;
        var confirmation = confirm(alertMessage);

        if (confirmation) {
            alert("We have recieved ur message, thanks for the Feedback!");
        } else {
            alert("Message recieving failed, give it another shot!");
        }
    });
});


/*Like button function in the contact page*/
document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector('.like-btn');
    const likesContainer = document.querySelector('.likes-container');

    likeButton.addEventListener('click', () => {
        let likes = parseInt(likesContainer.dataset.likes || 0) + 1;
        likesContainer.textContent = `Number of Likes: ${likes}`;
        likesContainer.dataset.likes = likes;
    });
});

/*Menu*/
function navigateToSection() {
    var menu = document.getElementById("menu");
    var selectedValue = menu.value;
    var icecreamSection = document.getElementById("icecream-section");
    var beverageSection = document.getElementById("beverage-section");

    if (selectedValue === "icecream") {
        icecreamSection.style.display = "block";
        beverageSection.style.display = "none";
    } else if (selectedValue === "beverage") {
        icecreamSection.style.display = "none";
        beverageSection.style.display = "block";
    }
}

