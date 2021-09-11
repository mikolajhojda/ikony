const btn = document.querySelector("#btn-scroll")
const container = document.querySelector("#container")

console.log(btn);

function pageScroll() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
}

btn.addEventListener("click", pageScroll)