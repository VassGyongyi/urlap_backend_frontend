export default class DataService
{
    constructor(){
        axios.defaults.baseURL="http://localhost:8000/"
    }
    getAxiosData(url, callback) {
        axios
          .get(url)
          .then(function (response) {
            // handle success
           // console.log(response);
            //console.log(response.data);
           // console.log(response.data.irok); az irok lista kiiratása
           callback(response.data) //meghívja az adatokkal
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      }
      postAxiosData(url, data) {
        console.log(data)
        axios
        .post(url, data)
        .then((response)=>{
          console.log("RESP", response);
        })
        .catch((error)=>{
          console.log("hiba", error);
        })
      }
    
      putAxiosData(url, data) {
        axios
        .put(`${url}/${id}`, data)
        .then((response)=>{
          console.log("RESP",response)
        })
      }
      
      deleteAxiosData(url, id) {
       axios
       .delete(`${url}/${id}`)
       .then((response)=>{console.log("RESP",response)})
      
      }
}