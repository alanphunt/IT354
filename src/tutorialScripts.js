export const deferonload = () => {
    let a = document.querySelector("#assignment2").closest(".assignments");
    let point = (a.offsetTop) - (a.clientWidth);
    let one = document.querySelector("[href='#assignment1']");
    one.classList.add("activeassignment");
    let two = document.querySelector("[href='#assignment2']");
    let li = document.querySelectorAll("#sidebar li a");

    const remove = () => {
        for (let x of li) {
            x.classList.remove("activeassignment");
        }
    };

    var prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
        if (window.pageYOffset > point) {
            remove();
            two.classList.add("activeassignment");
        } else {
            remove();
            one.classList.add("activeassignment");
        }

        var currentScrollPos = window.pageYOffset;
        let h = document.querySelector(".navwrapper");
        if (prevScrollpos > currentScrollPos) {
            h.style.top = "0";
        } else {
            h.style.top = "-" + (h.clientHeight + 5) + "px";
        }
        prevScrollpos = currentScrollPos;
    };
};