let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click",async () =>{ 
    
    let colArr  = await axios.get(url);
    show(colArr.data);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText="";
    for(col of colArr){
        if(col.state-province == "maharastra")
        {
            console.log(col.name);

            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }
    }
};

async function getColleges(country) {
    try{
        
    }catch (e){
        console.log("error : ",e);
        return [];
    }
}