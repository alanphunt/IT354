export const deferonload = () => {
    //this is janky as hell but since react is technically a single page application it doesn't reset
    //the scroll position of the window so I have to do it manually, but when I did that the navbar
    //would disappear off the screen so I have to manually reset that too. What is life?

    var prevScrollpos = window.pageYOffset;

    const hideNav = (e) => {
        var currentScrollPos = window.pageYOffset;
        let h = document.querySelector(".navwrapper");
        if (prevScrollpos > currentScrollPos) {
            h.style.top = "0";
        } else {
            h.style.top = "-" + (h.clientHeight + 5) + "px";
        }
        prevScrollpos = currentScrollPos;
    };

    window.onscroll = hideNav;
};

export const scrollToTop = () => {
    setTimeout(() => {
        document.querySelector(".navwrapper").style.top = "0";
        window.scrollTo(0, 0);
    }, 250);
};