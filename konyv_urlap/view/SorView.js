import { adatLeiro } from "./adatLeiro.js";
export default class SorView {
  #obj = {};
  #editForm = null;

  constructor(index, obj, szuloElem) {
    this.index = index;
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.htmlOsszerak();
    this.torolElem = $(`#torol_${this.index}`);
    this.torolElem.click(() => {
      this.#esemenyTrigger("sorTorles");
    });

    this.szerkElem = $(`#szerkeszt_${this.index}`);
    this.szerkElem.click(() => {
      this.#szerkEsemenyTrigger("sorSzerkesztes");
    });
  }

  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      if (key in adatLeiro || key === adatLeiro.id) {
        txt += `<td>${this.#obj[key]}</td>`;
      }
    }

    txt += `<td class="torol" id="torol_${this.index}">❌</td><td class="szerkeszt" id="szerkeszt_${this.index}">✏</td></tr>`;
    this.szuloElem.append(txt);
  }

  formOsszerak() {
    this.#editForm = $("<form class='szerkeszt form-group'></form>");
    for (const key in this.#obj) {
      if (key in adatLeiro || key === adatLeiro.id) {
        const inputField = $(
          `<input type="text" class="form-text text- muted"  name="${key}" value="${
            this.#obj[key]
          }">`
        );
        this.#editForm.append(inputField);
      }
    }

    const mentesGomb = $(
      "<button id='mentes_${this.index}' class='mentes' type='submit'>Mentés</button>"
    );
    this.#editForm.append(mentesGomb);
    mentesGomb.click(() => {
      this.mentesClickHandler();
      this.#editForm.remove();
    });

    $(".edit").empty().append(this.#editForm);
  }

  getId() {
    return this.#obj[adatLeiro.id];
  }

  #esemenyTrigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: { id: this.getId() } });
    window.dispatchEvent(e);
  }

  #szerkEsemenyTrigger(esemenyNev) {
    if (this.#editForm) {
      this.#editForm.remove();
    }
    this.formOsszerak();
    const e = new CustomEvent(esemenyNev, { detail: { id: this.getId() } });
    window.dispatchEvent(e);
  }

  mentesClickHandler() {
    const formData = {};
    this.#editForm.find("input").each(function () {
      formData[this.name] = $(this).val();
    });

    const e = new CustomEvent("sorSzerkesztes", {
      detail: { id: this.getId(), formData },
    });
    window.dispatchEvent(e);
  }
}
