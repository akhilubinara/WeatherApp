Search();


function Search(){
	var place = p_name.value;
	console.log(place);
	fetch(`https://api.weatherapi.com/v1/current.json?key=9381fc2ee35e45c59ef72359220212&q=${place}&aqi=no`)
	.then(res=>res.json())

	.then(data=>displayData(data))
	.catch(error=>{
		alert("Error in fetching")
	})
}
function displayData(placeDetails){
 	place = p_name.value;
    capital = placeDetails['location'].name;
	region = placeDetails['location'].region;
	country = placeDetails['location'].country
    temperature = placeDetails['current'].temp_c;
	humidity = placeDetails['current'].humidity;
	condition = placeDetails.current.condition.text
         var htmlData = `
    <div style=" padding:0 0px">
		 <table>
		 <tr>
			<td>Country Name</td>
			<td>:</td>
			<td>${country}</td>
			<td rowspan="5"></td>
		 </tr>
		 <tr>
			<td>Region</td>
			<td>:</td>
			<td>${region}</td>
		 </tr>
		 <tr>
			<td>Weather Condition</td>
			<td>:</td>
			<td>${condition}</td>
		 </tr>
		 </table>
		 </div>
		 
		 <div style="display:flex; justify-content:center">
		 <div style="margin: 20px">
		 <p style="font-size:40px; margin-top:10px; color:lightgreen">${temperature} °C</p> 
		 	<p style="font-size:20px; margin-top:10px; ">Temperature</p>
		 </div>
		 <div style="margin: 20px">
		 <p style="font-size:40px; margin-top:10px; color:lightgreen">${humidity} %</p> 
		 	<p style="font-size:20px; margin-top:10px">Humidity</p>
		 </div>
		 </div>`

  p_details.innerHTML=htmlData;

}
