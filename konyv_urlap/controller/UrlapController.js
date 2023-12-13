import DataService from "../Model/DataService.js";
import UrlapView from "../view/UrlapView.js";
import TablaView from "../view/TablaView.js";
class UrlapController{
    constructor(){
//console.log("controller")
this.dataService = new DataService()
new UrlapView($(".urlap"))
this.dataService.getAxiosData("/api/konyvs",this.megjelenit)
$(window).on("ujAdatHozzaAdasa",(event)=>{
    console.log(event.detail)
})
$(window).on("sorTorles",(evet)=>{
   this.dataService.deleteAxiosData("konyvek", event.detail.id) 
})

    }
    megjelenit(list){
        //console.log(list)
        //példányosítjuk a TáblaViewt
        new TablaView(list, $(".tabla")) //az adatok div-ben jeleníti meg
        

    }
}
export default UrlapController;