import { Details } from "./deatiles.module.js";
import { Ui } from "./ui.module.js";



export class Home{
    constructor(){
        document.querySelectorAll('.nav-link').forEach(link=>{
            link.addEventListener("click", () => {
                this.chageActiveLink(link)
                const category=link.dataset.category
                this.getGames(category)
                
        });
      
        });
        this.ui=new Ui()
        
        
        this.getGames('mmorpg')
        this.disapear= document.querySelector(".disapear")
        this.games= document.getElementById("games")
        
        
}
 chageActiveLink(link){document.querySelector('.navbar-nav .active').classList.remove("active")
    link.classList.add('active')
   

}
async getGames(eslam){
    try {
       document.querySelector(".loading").classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b8e3ed03dcmsh6ea22791434d878p16c87ajsn0aade1419fc5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${eslam}`, options)
       const live = await api.json();
       console.log(live)
     this.ui.dispalyData(live)
     document.querySelector(".loading").classList.add("d-none")
     document.querySelectorAll(".games").forEach(games=>{
        games.addEventListener("click", () => {
           this.disapear.classList.remove("d-none")
           this.games.classList.add("d-none")
       new Details(games.dataset.id);
     })

    } )
}
 
    catch (error) {
        
    }
}
}