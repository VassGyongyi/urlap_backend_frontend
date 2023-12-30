import DataService from "../Model/DataService.js";
import UrlapView from "../view/UrlapView.js";
import TablaView from "../view/TablaView.js";
import { adatLeiras } from "../view/adat.js";


class UrlapController {
  constructor() {
    this.dataService = new DataService();
    new UrlapView($(".urlap"), adatLeiras);

    this.dataService.getAxiosData("/api/konyvs", this.megjelenit);

    $(window).on("ujAdatHozzaAdasa", (event) => {
      if (this.formValid()) {
        this.dataService.postAxiosData("/api/konyvs", event.detail, this.megjelenit);
      } else {
        console.log("Az adatok nem validak!");
      }
    });

    $(window).on("sorTorles", (event) => {
      this.dataService.deleteAxiosData("/api/konyvs", event.detail.id, this.megjelenit);
    });

    $(window).on("sorSzerkesztes", (event) => {
      //this.formMegjelenit();
      const formData = event.detail.formData;
      const urlapView = new UrlapView($(".edit"), formData);
      urlapView.betoltAdatok(formData);
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

  /* formValid() {
    
    return true; 
  } */
}

export default UrlapController;
