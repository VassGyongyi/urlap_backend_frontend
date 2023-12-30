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
      postAxiosData(url, data, callback) {
        console.log(data)
        axios
        .post(url, {
          cim:data.cim,
          szerzo:data.szerzo,
          kiadas:data.kiadas
        })
        .then((response)=>{
          console.log("RESP", response)
          callback(response.data);
        })
        .catch((error)=>{
          console.log("hiba", error);
        })
      }
    
      putAxiosData(url, id, data, callback) {
        axios
          .put(`${url}/${id}`, data)  
          .then(function (response) {
            console.log("RESP", response);
            callback(response.data);
          })
          .catch(function (error) {
            console.log("hiba", error);
          });
      }
      
      deleteAxiosData(url, id,  callback) {
        //console.log(data)
     
       axios
       .delete(`${url}/${id}`)
       .then(function(response)
       {console.log("RESP",response)
          callback(response.data);
       })
      
      .catch((error)=>{
        console.error("hiba", error);
      });
      
      }
}