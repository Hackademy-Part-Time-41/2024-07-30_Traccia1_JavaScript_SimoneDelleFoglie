


/*
<div class="card">
            <div class="imgCard">
                <img src="https://www.southpark.it/immagini/episodi/stagione8/2/originali/3.jpg" alt="">
                <div>
                    <h3>Fico-o</h3>
                    
                    <p>Il mio robotino ed io al mare</p>
                    <span>AUTHORD ID: 4</span>
                </div>
    
            </div>
        </div>

*/



function createCard(card) {


    const container= document.createElement('div');
    container.classList.add('imgCard');

    const photo= document.createElement('img');
    photo.classList.add('imgCard')
    photo.src= card.imgSrc;
    container.appendChild(photo);

    const separator= document.createElement('div');
    container.appendChild(separator);

    const title= document.createElement('h3');
    title.textContent= card.title;
    separator.appendChild(title);


    const likeContainer= document.createElement('p')
    const numberLikes= document.createElement('p');
    const likes= document.createElement ('span');
    likes.classList.add('text');
    likes.textContent= 'Likes: ';
    numberLikes.textContent= card.likes.length;
    likeContainer.textContent= likes.textContent + numberLikes.textContent
    separator.appendChild(likeContainer);
    

    

    const description= document.createElement('p');
    description.textContent= card.description;
    separator.appendChild(description);

    
    const date= document.createElement('p');
    date.textContent= 'Creato in data: '+ card.createdAt;
    separator.appendChild(date);
    


    return container;
    
}


const cardContainer= document.getElementById('cardContainer');







fetch('http://dms.cyberdelia.eu/api/v1/post')
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((dataCards)=>{
    console.log(dataCards);

    dataCards.forEach((dataCard) => {

        const cardCreation=  createCard(dataCard);
        cardContainer.classList.add('card');
        cardContainer.appendChild(cardCreation);
        
    });
})
.catch((error)=>{
    console.log(error);
})
