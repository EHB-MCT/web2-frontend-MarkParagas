// import Tea from './bookmarks.js';

"use strict";

let html = '';
// let list = [];
// let testing = new Tea();

window.onload = () => {

  // When User scroll down - Background changes
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("hover", window.scrollY > 0);
  })

  function getData() {
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
                      <div class=".btn image_wrapper">
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
        /*
        document.querySelectorAll('.btn').forEach(button => {
          button.addEventListener('click', event => {
            console.log(event.target.id);
            let data = data.find(element => element.id == event.target.id);
            testing.addTea(data);
            refreshBookmarks()
          })
        })
        */
      });
  }

  // Nav Bookmarks of favorite Tea's
  function getBookmarks() {
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
            <div class="edited">
              <i class="fas fa-times-circle"></i>
            </div>
            <div>
              <a href="./page/info.html">
                 <img src="./${data.image}">
              </a>
            </div>
          </section>
          `;

        })

        document.getElementById("bookmarks").innerHTML = html;

      });
  }

  

  function refreshBookmarks() {
    document.getElementById('team').innerHtml = bookmarks1.describe();

    if (MessageChannel.type){
      let notif = document.createElement('div');
      notif.classList.add('alert');
      notif.setAttribute('role', 'alert');

      if(MessageChannel.type == 'Succeed'){
        notif.classList.add('alert-success');
      } else {
        notif.classList.add('alert-failed');
      }

      notif.innerText = message.value;

      document.getElementById('message').innerHtml = '';
      document.getElementById('message').appendChild(notif);

    }
  }
  
  getData()
  // getBookmarks()
}

/*

Not able to completed

*/