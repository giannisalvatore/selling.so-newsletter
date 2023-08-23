const waitlist = (show) => {
    if (show) {
        document.querySelector(".waitlist").style.display = "block";
        return;
    }
    document.querySelector(".waitlist").style.display = "none";
};

document.querySelectorAll(".cta").forEach((cta) => {
    cta.addEventListener("click", function () {
        waitlist(true);
    });
});

document.querySelector(".waitlist-bg").addEventListener("click", function () {
    waitlist(false);
});
