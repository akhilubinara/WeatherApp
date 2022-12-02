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
         var htmlData = `
         <table>
		 <tr>
			<td>Country Name</td>
			<td>:</td>
			<td>${country}</td>
			<td rowspan="5"></td>
		 </tr>
		 <tr>
			<td>Capital</td>
			<td>:</td>
			<td>${capital}</td>
		 </tr>
		 <tr>
			<td>Region</td>
			<td>:</td>
			<td>${region}</td>
		 </tr>
		 <tr>
			<td>Temperature</td>
			<td>:</td>
			<td style="font-size:40px">${temperature} °C</td>
		 </tr>
		 <tr>
			<td>humidity</td>
			<td>:</td>
			<td style="font-size:40px">${humidity} %</td>
		 </tr>
		 </table>
   
</div>`
  p_details.innerHTML=htmlData;
//   var t = `<h1 style="font-size:50px">${Temperature}°C</h1>`
//   temp.innerHTML = t; 
}
