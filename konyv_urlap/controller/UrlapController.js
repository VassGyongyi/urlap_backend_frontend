import DataService from "../Model/DataService.js";
import UrlapView from "../view/UrlapView.js";
import TablaView from "../view/TablaView.js";
import { adatLeiras } from "../view/adat.js";
import FormUrlapView from "../view/FormUrlapView.js";


class UrlapController {
  constructor() {
    this.dataService = new DataService();
    new UrlapView($(".urlap"), adatLeiras);
    this.dataService.getAxiosData("/api/konyvs", this.megjelenit);

    $(window).on("ujAdatHozzaAdasa", (event) => {
    
        this.dataService.postAxiosData("/api/konyvs", event.detail,this.megjelenit);
    });

    $(window).on("sorTorles", (event) => {
      this.dataService.deleteAxiosData("/api/konyvs", event.detail.id, this.megjelenit);
    });

    $(window).on("sorSzerkesztes", (event) => {
      this.formMegjelenit();
      let formData = event.detail.formData;
      let formUrlapView = new FormUrlapView($(".edit"), formData);
      console.log(formData)
      formUrlapView.betoltAdatok(formData); 
      this.dataService.putAxiosData("/api/konyvs", formData, this.megjelenit);      
    });
  }

  megjelenit(list) {
    new TablaView(list, $(".tabla"));
  }

  formMegjelenit() {
    // Előző űrlapok törlése
    $(".urlap").empty();

    new UrlapView($(".urlap"), adatLeiras);
  }
  
}

export default UrlapController;