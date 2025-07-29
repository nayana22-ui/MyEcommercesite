// Navbar scroll Fix top
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Add to Cart popup
document.querySelectorAll(".product-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const productTitle =
      this.parentElement.querySelector(".product-title").textContent;

    const popup = document.createElement("div");
    popup.className = "cart-popup";
    popup.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${productTitle} added to cart!</span>
                `;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("visible");
    }, 100);

    setTimeout(() => {
      popup.classList.remove("visible");
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 3000);
  });
});

const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
