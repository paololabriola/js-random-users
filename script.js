
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
    card.classList.add('card', 'p-2', 'shadow');
    const title = document.createElement('h5');
    title.innerHTML = data.name.first + " " + data.name.last;
    title.className = 'card-title';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const space = document.createElement('div');
    space.className = 'col-2';

    card.appendChild(img);
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    space.appendChild(card);
    document.getElementById('cards-gallery').appendChild(space);

  }