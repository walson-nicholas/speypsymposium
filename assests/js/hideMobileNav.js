function toggleMobileNav{
    var x = document.getElementsByClassName("navbar-toggler");
    x.addEventListener( click, hideMobileNav, capture )
}

function hideMobileNav() {
    var x = document.getElementById("navbarNav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}