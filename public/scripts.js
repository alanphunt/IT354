    var prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
            var currentScrollPos = window.pageYOffset;
            let h = document.querySelector(".navwrapper");
            if (prevScrollpos > currentScrollPos) {
                h.style.top = "0";
            } else {
                h.style.top = "-" + (h.clientHeight+5) + "px";
            }
            prevScrollpos = currentScrollPos;
        };
        /*
        switch (true) {
            case (y > point):
                two.classList.add("activeassignment");
                one.classList.remove("activeassignment");
                break;
            case (y < point):
                one.classList.add("activeassignment");
                two.classList.remove("activeassignment");
                break;
            default:
                break;
        }*/
