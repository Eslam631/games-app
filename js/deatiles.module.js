import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById("warin").addEventListener("click",()=>{
            document.querySelector(".disapear").classList.add("d-none")
            document.getElementById("games").classList.remove("d-none")
        }
        )
        this.getDetalies(id);
    }
    async getDetalies(id) {
       
        try {document.querySelector(".loading").classList.remove("d-none")
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b8e3ed03dcmsh6ea22791434d878p16c87ajsn0aade1419fc5',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
        
            const title = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
         const response = await title.json()
          console.log(response)
           
        new Ui().displayDetailes(response)
        document.querySelector(".loading").classList.add("d-none")
           
        } 
      
    
    catch (error) {
            
    }
    
    }
    
}