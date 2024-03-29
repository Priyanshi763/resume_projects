
const url='https://real-time-news-data.p.rapidapi.com/search?query=official%20entrance%20exam&country=IN&lang=en'
const sub=document.getElementById('container');

const options={
    "method":"GET",
    "mode":"cors",
    "headers": {
		'X-RapidAPI-Key': '964ae3146fmsh4e7429dd82cc07bp170da5jsn269d645d3d53',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
}

const getNews = async()=>{

    const response =await fetch(url,options);
    const resp_data=await response.json();
    console.log(resp_data);
    console.log(resp_data.data);
    for(var i=0; i<resp_data.data.length;i++){
        var new_par = document.createElement("p");
        var new_link = document.createElement("a");
        const date_string=resp_data.data[i].published_datetime_utc;
        const date = new Date(date_string);
        const formattedDate = date.toLocaleString(); 
        const styledDate = `<span style="font-size: 10.5px; color:darkslategray; font-weight:550;">${formattedDate}</span>`;
        new_link.href = resp_data.data[i].link;
        new_link.target = "_blank";
        new_link.innerHTML = i+1 + ". " + resp_data.data[i].title +"<br>"+ "(" + styledDate + ")";
        new_par.appendChild(new_link);
        sub.appendChild(new_par);
    }
    
}

getNews();