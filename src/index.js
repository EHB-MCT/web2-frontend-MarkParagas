"use strict";

let html = '';

window.onload = () => {
    fetch('https://tea-api-vic-lo.herokuapp.com/tea')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);

            data.forEach(data => {

                html += `
                <section class="container">
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
                </section>
                `;

            })

            document.getElementById("container").innerHTML = html;

        });
}