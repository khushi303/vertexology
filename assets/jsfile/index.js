function navfun() {
    document.getElementById("nav-icon").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden")
    document.getElementById("menu-icon").classList.toggle("cross");
}

setTimeout(() => {
    console.log("Delayed for 3 second.");
    document.getElementById("preloder").classList.add("opacity-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 3000);