function showMessage() {
    document.getElementById("loveImage").style.display = "block"; // Show the image
    document.getElementById("container").innerHTML = `
        <h2>Thank You for coming into my life! </h2>
        <img src="love1-removebg-preview.png" alt="Love Image" style="width: 150px;">
        <h2>❤️ I love you so much ❤️</h2>
    `;
}

function increaseYesSize() {
    let yesButton = document.getElementById("yesBtn");
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + "px";
    yesButton.style.padding = (currentSize + 5) + "px";
}
