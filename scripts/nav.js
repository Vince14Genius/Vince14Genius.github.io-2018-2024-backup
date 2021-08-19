"use strict"

function toggleMenu() {
    const menuElement = document.getElementById("nav-pulldown-menu")
    menuElement.style.display = menuElement.style.display === "none" ? "block" : "none"
}

const universalNav = document.getElementById("universal-nav")
universalNav.innerHTML = `
<a id="skip-to-main-button" href="#main-content">Skip to main content</a>

<nav>
  <div class="exterior-width-wrapper">
    <div class="nav-left">
      <a class="nav-link light-text" href="/">
        <img class="nav-image" id="nav-profile-picture" alt="Profile" src="/images/profile.png">
        <span class="nav-left-inner"> Vince14Genius</span>
      </a>
    </div>
    <div class="nav-right" id="nav-right-button">
      <a class="nav-link" onclick="toggleMenu()"><img class="nav-image" alt="Menu"></a>
    </div>
    <ul class="nav-right nav-ul" id="nav-right-menu">
      <li class="nav-item"><a class="nav-link light-text" href="/about">About</a>
      <li class="nav-item"><a class="nav-link light-text" href="/projects">Projects</a>
      <li class="nav-item"><a class="nav-link light-text link-disabled">Blog</a>
      <!--<li class="nav-item"><a class="nav-link" href="/site-map"><img class="nav-image" alt="Site Map" src="/images/search.svg"></a>-->
    </ul>
    <ul class="nav-right nav-ul" id="nav-pulldown-menu" style="display: none;">
      <li class="nav-item"><a class="nav-link light-text" href="/about">About</a>
      <li class="nav-item"><a class="nav-link light-text" href="/projects">Projects</a>
      <li class="nav-item"><a class="nav-link light-text link-disabled">Blog</a>
      <!--<li class="nav-item"><a class="nav-link" href="/site-map"><img class="nav-image" alt="Site Map" src="/images/search.svg"></a>-->
    </ul>
  </div>
</nav>
`
