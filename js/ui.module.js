export class Ui {
    constructor() { }
    dispalyData(data) {

        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            cartona += `<div class="col-md-3 p-2 ">
      
                    <div class="games border border-3 border-dark" href="index2.html" data-id="${data[i].id}"><img src="${data[i].thumbnail}" class="p-3 w-100" alt="">
         
                        <div class="free d-flex justify-content-between ">
                            <p >
            ${data[i].title
                }}</p><button class="btn bg-primary text-white">free</button>
                        </div>
                        <p class=" text-center p-3 ">
                           ${data[i].short_description.slice(0, 50)
                }</p>
                        <div class="caption border d-flex justify-content-between border-dark ">
                            <p class="m-1 bg-secondary rounded-pill ">${data[i].genre}</p>
                            <p class="m-1 bg-secondary rounded-pill">${data[i].platform
                }</p>
                        </div>
                         
                    </div>
                  
                </div>`

        }
        document.querySelector('.row').innerHTML = cartona;
    }



    displayDetailes(data) {
        let detaliesBox = ``;
        detaliesBox += `   
    <div class="container d-md-flex">
    <div class="row d-flex ">
    <div class="col-md-4">
    <div>
            <div class="p-md-5 p-sm-0">
                <h3>Details Game

                </h3>
                <div >
                <img class="w-100" src="${data.thumbnail}" alt=""></div></div>
            </div>
            </div>
            <div class="col-md-8">
            <div class="p-md-5 p-sm-0">
                <h3>Title:${data.title}</h3>
                <h4>Category:<span class="bg-info">${data.genre}</span></h4>
                <h4>Platform:<span class="bg-info">${data.platform}</span></h4>
                <h4>Status: <span class="bg-info">${data.status}</span></h4>
                <p>${data.description}
                   </p>
                <a href="${data.game_url}" class="btn btn-lg btn-outline-warning" target="blank">showGame</a>
            </div>
            </div>
           </div>
        </div>`;
        document.getElementById('eggs').innerHTML = detaliesBox;


    }

}



