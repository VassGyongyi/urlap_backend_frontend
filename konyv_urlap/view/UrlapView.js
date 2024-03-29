import TextUrlapView from "./TextUrlapView.js";
import NumberUrlapView from "./NumberUrlapView.js"

class UrlapView {
    #formAdat = {};
    #inputElemObjektumokLista = [];
    #urlapValid = true;

    constructor(szuloElem, adatLeiras) {
      szuloElem.append("<form>");
      
      this.formElem = szuloElem.find("form");
     
      this.htmlOsszeallit(adatLeiras);
       this.formElem.append(
        `<div class="mb-3 mt-3">
          <input type="submit" value="Küld" class="kuld_gomb">
        </div>`
      );   
      this.submitElem = this.formElem.find("#submit");
  
      this.submitElem.on("click", (event) => {
        event.preventDefault();
        this.#urlapValid = true;
        this.#inputElemObjektumokLista.forEach((elem) => {
          this.#formAdat[elem.key] = elem.getValue();
          this.#urlapValid = this.#urlapValid && elem.getValid();
        });
  
        if (this.#urlapValid) {
          this.trigger("ujAdatHozzaAdasa");
          console.log("hozzáadás")
        } else {
          console.log("Az adatok nem validak!");
        }
      });
    }
  
    trigger(esemenyNev) {
      const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
      window.dispatchEvent(e);
    }
  
    htmlOsszeallit(adatLeiras) {
      for (const key in adatLeiras) {
        switch (adatLeiras[key].tipus) {
          case "text":
            this.#inputElemObjektumokLista.push(
              new TextUrlapView(this.formElem, adatLeiras[key], key)
            );
            break;
          case "number":
            this.#inputElemObjektumokLista.push(
              new NumberUrlapView(this.formElem, adatLeiras[key], key)
            );
            break;
          default:
            break;
        }
      }
             
    }
  }
  
  export default UrlapView;