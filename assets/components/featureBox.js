class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <div class="col-12 col-md-6 col-lg-4 item">
      <a href="jostl.html">
          <div class="card featured">
              <h4>JOSTL.</h4>
              <p style="color:#757575">A 3rd Screen Sports for Android and iOS</p>
              <img src="assets/images/work-jostl.jpg" alt="JOSTL. Logo">
          </div>
      </a>
  </div>
        `;
    }
}

customElements.define("footer-component", Footer);
