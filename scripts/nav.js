"use strict"

function toggleMenu() {
    const menuElement = document.getElementById("nav-pulldown-menu")
    menuElement.style.display = menuElement.style.display === "none" ? "block" : "none"
}

const universalNav = document.getElementById("universal-nav")
universalNav.innerHTML = `
<a id="skip-to-main-button" href="#main-content">Skip to main content</a>

<nav class="noselect">
  <div class="exterior-width-wrapper full-height">
    <div class="nav-left">
      <a class="nav-link light-text" href="/">
        <img class="nav-image" id="nav-profile-picture" alt="Profile" src="/images/profile.png">
        <span class="nav-left-inner"> Vince14Genius</span>
      </a>
    </div>
    
    <ul class="nav-right nav-ul" id="nav-right-menu">
      <li class="nav-item"><a class="nav-link light-text" href="/about">About</a>
      <li class="nav-item"><a class="nav-link light-text" href="/projects">Projects</a>
      <li class="nav-item"><a class="nav-link light-text link-disabled">Blog</a>
      <!--<li class="nav-item"><a class="nav-link" href="/site-map"><img class="nav-image" alt="Site Map" src="/images/search.svg"></a>-->
    </ul>
    
    <!-- Mobile Pulldown Menu -->
    <div class="nav-right" id="nav-right-button">
    
      <!-- Menu Button -->
      <input type="checkbox" class="menu-hidden-checkbox" onclick="toggleMenu()">
      <div class="nav-link">
        <span class="menu-button-top"></span>
        <span class="menu-button-bottom"></span>
      </div>
  
      <!-- The Pulldown Menu Itself -->
      <div class="exterior-width-wrapper" id="nav-pulldown-menu" style="display: none;">
        <ul class="nav-right nav-ul">
          <li class="nav-item"><a class="nav-link light-text" href="/about">About</a>
          <li class="nav-item"><a class="nav-link light-text" href="/projects">Projects</a>
          <li class="nav-item"><a class="nav-link light-text link-disabled">Blog</a>
          <!--<li class="nav-item"><a class="nav-link" href="/site-map"><img class="nav-image" alt="Site Map" src="/images/search.svg"></a>-->
        </ul>
      </div>
      
    </div>
  </div>
</nav>
`
