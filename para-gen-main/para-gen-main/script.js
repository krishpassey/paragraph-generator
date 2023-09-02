const input = document.getElementById("numberofwords");
const container = document.querySelector("#container");

const generateword = (n) =>{
    let text = "";
    let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<n; i++){
     let random = (Math.random()* 25).toFixed(0);
        text += words[random];
    }
    return text;
}

const generatepara = () =>{
    let numberlength = Number(input.value);
    
    const para = document.createElement("p");
    let data = "";

    for(let i=0; i<numberlength; i++){
    const random = (Math.random()*15).toFixed(0);
    data += generateword(random);
    data += " ";
    }
    para.innerText = data;
    para.setAttribute("class","para")
    if(data === ""){
alert("Please enter a valid value first!");
    }
    else if(data !== ""){
    container.append(para);
    }
}  