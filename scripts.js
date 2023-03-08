pass = document.querySelector("#pass-1");
pass2 = document.querySelector("#pass-2");
outerList = pass.parentElement;
document.body.addEventListener("input", () => {
    P1 = pass.value;
    P2 = pass2.value;
    if (P1.length >= 8 && P2.length >= 8 && P1 !== P2) {
        pass.classList.add("error");
        pass2.classList.add("error");
        outerList.classList.add("error");
    }
    else {
        pass.classList.remove("error");
        pass2.classList.remove("error");
        outerList.classList.remove("error");
    }
})