class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="odd">

      <!-- Footer [links] -->
      <section id="footer" class="footer">
          <div class="container">
              <div class="row items footer-widget">
                  <div class="col-12 col-lg-3 p-0">
                      <div class="row">
                          <div class="branding col-12 p-3 text-center text-lg-left item">
                              <div class="brand">
                                  <a href="/" class="logo">
                                      Socials.                                 
                                      <!-- 
                                          Custom Logo
                                          <img src="assets/images/logo.svg" alt="Leverage">
                                      -->
                                  </a>
                              </div>
                              <p></p>
                              <ul class="navbar-nav social share-list mt-0 ml-auto">
                                  <li class="nav-item">
                                      <a href="https://www.linkedin.com/in/davisondan/" target="_blank" rel="noopener noreferrer" class="nav-link"><i class="icon-social-linkedin"></i></a>
                                  </li>
                              </ul>

                              <ul class="navbar-nav social share-list mt-0 ml-auto">
                                  <li class="nav-item">
                                      <a href="https://github.com/d-davison" target="_blank" rel="noopener noreferrer" class="nav-link"><i class="icon-social-github"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-9 p-0">                            
                      <div class="row">
                          <div class="col-12 col-lg-4 p-3 text-center text-lg-left item">
                              <h4 class="title">Get in Touch</h4>
                              <ul class="navbar-nav">
                                  <li class="nav-item">
                                      <a href="#" class="nav-link">
                                          <i class="icon-envelope mr-2"></i>
                                          dandavison99@gmail.com
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </section>

  </footer>
        `;
    }
  }
  
  customElements.define("footer-component", Footer);
  