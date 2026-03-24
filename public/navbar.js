function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    let hamburger = document.getElementsByClassName(".hamburger");
    hamburger.array.forEach(element => {
        element.style.display = "none";
    });
}