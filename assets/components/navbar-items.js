class NavbarItems extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <ul class="navbar-nav items">
      <li class="nav-item dropdown">
          <a href="#" class="nav-link">Projects<i class="icon-arrow-down"></i></a>
          <ul class="dropdown-menu">
              <li class="nav-item"><a href="page-game-.html" class="nav-link">VR & Chronic Pain</a></li>
              <li class="nav-item"><a href="jostl.html" class="nav-link">JOSTL.</a></li>
              <li class="nav-item"><a href="page-game-tiltrocket.html" class="nav-link">Tilt Rocket</a></li>
          </ul>
      </li>      
      <li class="nav-item">
          <a href="page-about-2.html" class="nav-link">About<i class="nav-link"></i></a>
      </li>                 
  </ul>
      `;
    }
  }
  
  customElements.define('navbar-items', NavbarItems);