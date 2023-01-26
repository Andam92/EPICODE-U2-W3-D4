const fetchData = async function () {
  //dichiaro la funzione /che deve essere async) con fetch al suo interno
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books"); //eseguo il fetch e lo associo alla var "res" (response)
    console.log(res);
    if (res.ok) {
      //se la proprietà "ok" di res è true, procedo a convertire in oggetto (col metodo json)
      let data = await res.json();
      console.log("data", data);
      let rowReference = document.getElementById("cards"); //mio riferimento all'elemento html a cui "appendere" le card
      data.forEach((book) => {
        //ciclo l'array "data", che sarebbe il risultato di res.json quindi un oggetto legibile
        rowReference.innerHTML =
          rowReference.innerHTML + //aggiungo all'html un sample della car inserendo le proprietà di ogni singola card in modo da generarle dinamicamente
          `<div id="element" class="col-sm-6 col-md-4 col-lg-3 mb-sm-3">
          <div class="card row">
          
            <img src="${book.img}" class="card-img-top " alt="...">
            <div class="card-body">
            <div class="d-flex flex-column" >
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
                Price: ${book.price}
              </p> 
               <a onclick="skipFunc()" id="button" class="btn btn-primary align-self-center">Skip</a>  
                </div>          
            </div>
          </div>
        </div>`;
      });
    } else {
      //se "ok" non è true, significa che la chiamata è andata a buon fine ma c'è un problema di risposta
      console.log("Porcapaletta");
    }
  } catch (error) {
    //il catch invece avviene se c'è un problema a monte, es. connessione
    console.log("errore di fetch -> catch", error);
  }
};

fetchData(); //eseguo il fetch

let skipFunc = function () {
  let elementToSkip = document.getElementById("element");
  elementToSkip.classList.add("skip");
};
