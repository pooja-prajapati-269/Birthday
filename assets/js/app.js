$(document).ready(function () {
    function resizeBook() {
        const bookWidth = Math.min(window.innerWidth * 0.9, 1000);
        const bookHeight = window.innerHeight * 0.7;
        $("#flipbook").turn("size", bookWidth, bookHeight);
    }

    // Init flipbook
    $("#flipbook").turn({
        width: Math.min(window.innerWidth * 0.9, 1000),
        height: window.innerHeight * 0.7,
        autoCenter: true,
        gradients: true,
        elevation: 50
    });

    // Resize on window
    $(window).on("resize", resizeBook);

    // Heart click
    const heart = document.getElementById("heart");
    const audio = document.getElementById("heartbeat");
    if (heart) {
        heart.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    }
});
