"use strict";

// ナビゲーションはJavaScriptが無効でも表示する。
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

if (menuToggle && navigation) {
  document.documentElement.classList.add("js-enabled");
  menuToggle.hidden = false;

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    menuToggle.querySelector("span").textContent = "＋";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    menuToggle.querySelector("span").textContent = isOpen ? "＋" : "−";
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 761px)");
  desktopQuery.addEventListener("change", closeMenu);
}
