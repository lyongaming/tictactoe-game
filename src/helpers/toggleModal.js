const toggleModal = (opacity, visibility) => {
    const modal_container = document.querySelector(".modal-container");
    const modal = document.querySelector("div.modal");

    if (visibility === "visible") {
        modal_container.style.opacity = opacity;
        modal_container.style.visibility = visibility;
        modal.classList.toggle("modal-close");
    } else if(visibility === "hidden") {
        modal.classList.toggle("modal-close");
        setTimeout(() => {
            modal_container.style.opacity = opacity;
            modal_container.style.visibility = visibility;
        }, 1000);
    }
}

export default toggleModal;