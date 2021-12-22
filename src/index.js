"use strict";
  // When User scroll down - Background changes
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hover", window.scrollY > 0);
  })


let html = '';

window.onload = () => {
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
                  <a href="info.html">
                    <div class="image_wrapper">
                        <img src="./${data.image}">
                          <div class="flex overlay">
                              <h2>
                                ${data.name}
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

// Works