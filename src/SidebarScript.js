export const SidebarScript = () => {
    var prevLinkPos = 0;

    let links = Array.from(document.querySelectorAll("#sidebar ul li a"));
    for (let a of links) {
        a.addEventListener("click", e => {
            e.preventDefault();
            let id = e.target.hash;
            window.scrollTo({
                top: (document.querySelector(id).offsetTop + (links.indexOf(a) > prevLinkPos ? document.querySelector(".navwrapper").clientHeight : 0)),
                left: 0,
                behavior: 'smooth'
            });
            prevLinkPos = links.indexOf(a);
        });
    }
};

export default SidebarScript;