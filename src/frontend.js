"use strict";

// ------------------- WIP ------------------- 

let html = '';

window.onload = () => {
    fetch('https://tea-api-vic-lo.herokuapp.com/tea')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);

            data.forEach(data => {

                html += `
                <section>
                    <div class="image_wrapper">
                        <img src="./${data.image}">
                    </div>
                    <div class="article_content_wrapper">
                        <div>
                            <h2>${data.name}</h2>
                        </div>
                        <div class="content">
                            ${data.description}
                        </div>
                    </div>
                </section>
                `;

            })

            document.getElementById("container").innerHTML = html;

        });
}
