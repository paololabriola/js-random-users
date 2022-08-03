
const addBtn = document.getElementById('add-user');
addBtn.addEventListener('click', addUser);

function addUser() {
   
    axios.get('https://randomuser.me/api/')
      .then(function (response) {
        
        createUser(response.data.results[0]);

      })
      .catch(function (error) {
       
        console.log(error);

      });

  }

  function createUser(data) {

    const img = document.createElement('img');
    img.src = data.picture.large;
    img.className = 'card-img-top';
    const card = document.createElement('div');
    card.classList.add('card', 'col-2', 'mx-1');
    const title = document.createElement('h5');
    title.innerHTML = data.name.first + " " + data.name.last;
    title.className = 'card-title';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    card.appendChild(img);
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    document.getElementById('cards-gallery').appendChild(card);

  }