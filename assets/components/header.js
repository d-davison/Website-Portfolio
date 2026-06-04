class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <header id="header">

      <!-- Navbar -->
      <nav data-aos="zoom-out" data-aos-delay="800" class="navbar navbar-expand">
          <div class="container header">

              <!-- Navbar Brand-->
              <a class="navbar-brand" href="/">
                  Dan Davison<i class="leverage-2-0"></i>
                  <!-- 
                      Custom Logo
                      <img src="assets/images/logo.svg" alt="Leverage">
                  -->
              </a>

              <!-- Nav holder -->
              <div class="ml-auto"></div>

              <!-- Navbar Items -->
              <ul class="navbar-nav items">
              <li class="nav-item">
                 <a href="portfolio" class="nav-link">Portfolio<i class="nav-link"></i></a>
              </li>                     
              <li class="nav-item">
                  <a href="about" class="nav-link">About<i class="nav-link"></i></a>
              </li>                 
          </ul>

              <!-- Navbar Icons -->
              <ul class="navbar-nav icons">
                  <li class="nav-item social">
                      <a href="https://www.linkedin.com/in/davisondan/" target="_blank" rel="noopener noreferrer" class="nav-link"><i class="icon-social-linkedin"></i></a>
                  </li>
              </ul>

                <ul class="navbar-nav icons">
                  <li class="nav-item social">
                      <a href="https://github.com/d-davison" target="_blank" rel="noopener noreferrer" class="nav-link"><i class="icon-social-github"></i></a>
                  </li>
              </ul>

              <!-- Navbar Toggle -->
              <ul class="navbar-nav toggle">
                  <li class="nav-item">
                      <a href="#" class="nav-link" data-toggle="modal" data-target="#menu">
                          <i class="icon-menu m-0"></i>
                      </a>
                  </li>
              </ul>

              <!-- Navbar Action -->
          
          </div>
      </nav>

  </header>
      `;
    }
}

customElements.define("header-component", Header);
