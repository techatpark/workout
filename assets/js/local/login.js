class Login {
    constructor() {
        if (document.querySelector("#userName")) {
            document.querySelector("#userName").focus();
            this.registerEvents();
          }

    }

    registerEvents() {
        document
          .querySelector("form")
          .addEventListener("submit", (e) => this.login(e));
      }
    
      login(event) {
        console.log('Login Clicked');
      }
}

new Login()