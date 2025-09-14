// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Placeholder search function
document.querySelector(".search-bar button")?.addEventListener("click", () => {
  const query = document.querySelector(".search-bar input").value.trim();
  if(query) {
    alert(`Searching for: ${query}`);
    // Redirect or fetch results logic here
  }
});
