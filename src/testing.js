"use strict";

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