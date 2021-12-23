"use strict";

let html = '';

window.onload = () => {

  // When User scroll down - Background changes
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hover", window.scrollY > 0);
  })

  // Shows Api on the page
  fetch('https://tea-api-vic-lo.herokuapp.com/tea')
    .then(response => response.json())
    .then(data => {
      console.log('Getting data');
      console.log(data);

      data.forEach(data => {
        // Once It click it should link to next page by selected items
        html += `
                <section class="container">
                  <a href="./page/info.html">
                    <div class="image_wrapper">
                        <img src="./${data.image}">
                          <div class="flex overlay">
                              <h2>
                                ${data.name} Tea
                              </h2>
                              <p>
                                ${data.description}
                              </p>
                          </div>
                    </div>
                  </a>
                </section>
                `;

      })

      document.getElementById("container").innerHTML = html;

    });
}

/*
let html = '';
// Testing
window.onload = () => {
  fetch('https://tea-api-vic-lo.herokuapp.com/tea')
    .then(response => response.json())
    .then(data => {
      console.log('Getting data');
      console.log(data);
        data.forEach(data => {
          // Once It click it should link to next page by selected items
          html += `
              <section class="container">
                <div class="edited">
                  <i class="fas fa-bookmark"></i>
                </div>
                <div>
                  <a href="info.html">
                     <img src="./${data.image}">
                  </a>
                </div>
              </section>
              `;
  
        })
        
      document.getElementById("bookmarks").innerHTML = html;
    });
}
*/