export const adatLeiras ={
    cim: {
        megjelenes: "Cím",
        tipus: "text",
        placeholder: "Valami",
        pattern: "^[A-Z][a-z]{3,}",
        value:"",
        szoveg: "Legalább 3 betű, a címnek nagybetűvel kell kezdődnie!",
        required: true,
    },
    szerzo: {
        megjelenes: "Szerzo",
        tipus: "text",
        placeholder: "Szerző",
        pattern: "[A-Z][a-z]{3,}",
        value:"",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
   
    kiadas: {
        megjelenes: "Kiadás éve",
        tipus: "number",
        placeholder:"2000",
        value:"",
        pattern:{ min: "1000", max: "2024" },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
        required: true,
    },
};
/* export const adatLeiras2={
    cim: "Cím",
    szerzo: "Szerző",
}; */
