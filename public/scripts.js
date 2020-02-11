window.onload = function() {
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
    console.log(point);
    window.onscroll = () => {
        if(window.pageYOffset > point){
            remove();
            two.classList.add("activeassignment");
        }else{
            remove();
            one.classList.add("activeassignment");
        }
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
    };
};
