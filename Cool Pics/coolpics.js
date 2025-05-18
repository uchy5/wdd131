const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery"); 
gallery.addEventListener("click", (event) => {
    const modal = document.querySelector(".image-viewer");
    if (modal && event.target === modal) {
        modal.close();
    }
});

document.querySelector(".gallery").addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const modal = document.createElement("dialog");
        modal.classList.add("image-viewer");
        modal.innerHTML = `<img src="${event.target.src}" alt=""><button class="close-viewer">X</button>`;
        document.body.append(modal);
        modal.showModal();

        modal.querySelector(".close-viewer").addEventListener("click", () => {
            modal.close();
            modal.remove();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.close();
                modal.remove();
            }
        });
    }
});
{}