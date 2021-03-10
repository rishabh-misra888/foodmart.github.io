export async function getLocation(lat,long){


//adding header for not storing cache


 let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+lat+"&lon="+long;
 //hiting the url with get request
    try {
        let res = await fetch(url).then(response => response.json());
        return await res;
        
      
    } catch (error) {
        console.log("error to connect api");
    }

}