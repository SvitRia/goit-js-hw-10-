export const refs = {
    selectBreeds:document.querySelector(".breed-select"),
    loaderText:document.querySelector(".loader"),
    errorText:document.querySelector(".error"),
    catInfo:document.querySelector(".cat-info")
 }

const options = {
    method: "GET",
  };
  
 export function fetchBreeds() {
    return fetch(" https://api.thecatapi.com/v1/breeds", options)
 .then((resp) => {
    console.log(resp);
     if (!resp.ok) {
      throw new Error(resp.statusText);
   }
       console.dir(resp.json());
    return resp.json();
    
  })
}





