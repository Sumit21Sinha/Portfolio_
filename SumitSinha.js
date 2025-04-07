document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar .section h2");
  
    sidebarItems.forEach(item => {
      const triangle = document.createElement("span");
      triangle.textContent = "▶";
      triangle.style.marginRight = "10px";
      triangle.style.display = "inline-block";
      triangle.style.transition = "transform 0.2s ease";
      item.prepend(triangle);
  
      const ul = item.nextElementSibling;
      ul.style.display = "block"; // default open
  
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        if (ul.style.display === "none") {
          ul.style.display = "block";
          triangle.style.transform = "rotate(0deg)";
        } else {
          ul.style.display = "none";
          triangle.style.transform = "rotate(90deg)";
        }
      });
    });
  
    console.log("Interactive resume loaded with sidebar toggles.");
  });