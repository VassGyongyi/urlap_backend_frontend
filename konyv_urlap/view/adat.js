export const adatLeiras ={
    vezetekNev: {
        megjelenes: "Vezeték név",
        tipus: "text",
        placeholder: "Valaki ",
        pattern: "^[A-Z][a-z]{3}",
        value:"",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
    keresztNev: {
        megjelenes: "Kereszt név",
        tipus: "text",
        placeholder: "Vagyok",
        pattern: "[A-Z][a-z]{3}",
        value:"",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
   
    szul: {
        megjelenes: "Születési év",
        tipus: "number",
        placeholder:"2000",
        value:"",
        pattern:{ min: "1000", max: "2023" },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
        required: true,
    },
};
/* export const adatLeiras2={
    cim: "Cím",
    szerzo: "Szerző",
}; */
