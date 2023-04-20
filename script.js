// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla 
//        sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
        

      /*  window.onload = function removeTwitter() {
            myAside = document.getElementsByTagName('aside')[0];
            myDiv = myAside.querySelectorAll('div')[2];
            myTwitter = myDiv.querySelectorAll('a')[1];
            myTwitter.remove();
        }
*/
        let myListUnstyled = document.getElementsByClassName("list-unstyled");
        
        myListUnstyled = myListUnstyled[myListUnstyled.length -1];
        //console.log(myListUnstyled.childNodes);
        let myLi = myListUnstyled.getElementsByTagName("li");
        console.log(myLi);
        for (const element of myLi) {
            if (element.innerText === "Twitter"){
                element.remove()
            }
        }
        


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM 
//       cliccando sul link "Continua a leggere".

    /*    function removeParent(){
            myJumbo = document.getElementsByClassName('jumbotron')[0];
            myAnchor = myJumbo.querySelectorAll('a');
            console.log(myAnchor);

            myAnchor.addEventListener ('click', () => {
                myAnchor.parentNode.remove();
            })
        }
        removeParent();*/
        let linkOff = document.getElementsByClassName("stretched-link");
        console.log(linkOff);
        for(let deleteItem of linkOff){
            deleteItem.addEventListener("click", (event)=>{
                event.target.parentNode.parentNode.parentNode.remove();
            })
        }


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta 
// che il cursore passa sopra l'autore del post.

/*function mouseOverAuthor(){
    let myMeta = document.getElementsByClassName('blog-post-meta');
    let myAuthors = myMeta.getElementsByTagName('a');
    console.log(myAuthors);
    console.log(myMeta);
    for (let i = 0; i < myMeta.length; i++) {
        myAuthors = myMeta[i].getElementsByTagName('a')[0];
        myAuthors.addEventListener ('mouseover', () =>{
            alert(myAuthors.innerText);
        })
    }
mouseOverAuthor();*/

let authors = document.querySelectorAll("p.blog-post-meta a");
for (const author of authors) {
    author.addEventListener("mouseover", () => {
        alert(author.innerText);
    })
}

