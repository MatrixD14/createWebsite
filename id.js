const screenX = document.querySelector("#valorx"),
    background = document.querySelector("#background"),
    frontSize = document.querySelector("#font_size"),
    screenY = document.querySelector("#valory"),
    screenColor = document.querySelector("#Color"),
    screenName = document.querySelector("#name"),
    editer = document.querySelector("#edite");
    let select = null;
    let armaze = [];
buttonCreate("#par", "p");
buttonCreate("#buttons", "button");
buttonCreate("#block", "div");
document.querySelector("#enter").addEventListener("click", function(){
        if(select){
            nomeObject(select);
        }
});

function buttonCreate(name, typeObject) {
    document.querySelector(name).addEventListener("click", () => {
        if(screenX.value > 0 && screenY.value > 0){
            create(typeObject,screenName.value);
            noedita();
            return; 
        }messagem();
    });
}
function logitaDelete2(arm){
    document.querySelector("#delete").addEventListener("click", function(){
        if(select!=null){
            noedita();
            select.remove();
            runlist = arm.indexOf(select);
            if(runlist !==-1) arm.splice(runlist, 1);
            select= null;
            console.log(arm);
        }
    });
}
function nomeObject(object) {
    object.style.display= "flex";
    object.style.justifyContent= "center";
    object.style.alignItems = "center";
    object.style.fontSize = frontSize.value + "px";
    object.style.backgroundColor = background.value;
    object.style.color = screenColor.value;
    object.style.width = screenX.value + "px";
    object.style.height = screenY.value + "px";
}
function create(html,text) {
    let object = document.createElement(html);
    let onoff=true;
    nomeObject(object);
    object.textContent = text;
    object.addEventListener("click", function(e){
        e.stopPropagation();
        select = object;
        onoff =!onoff;
        if(!armaze.includes(object)){
        armaze.push(object);
        console.log(armaze.length);
        }
        if(!onoff){
            edita();
            object.style.outline = convertcolor(object);
            logitaDelete2(armaze);
            armaze.forEach((el) => {if(el != object)el.style.outline = "none";});
            return;
        }
        noedita();
        selectObject();
    });
    armaze.forEach((el) => {
        if (el !== object) el.style.outline = "none";
    });
    document.querySelector("#stopbutton").appendChild(object);
    return object;
}
function noedita(){
    editer.style.opacity = "0";
    editer.style.pointerEvents = "none";
}
function edita(){
    editer.style.opacity = "1";
    editer.style.pointerEvents = "auto";
}
function convertcolor(object){
    let mycolo = window.getComputedStyle(object).backgroundColor;
    let rgb = mycolo.match(/\d+/g);
    let r = 255 - parseInt(rgb[0]);
    let g = 255 - parseInt(rgb[1]);
    let b = 255 - parseInt(rgb[2]);
    r = isNaN(r)? 0 : r;
    g = isNaN(g)? 0 : g;
    b = isNaN(b)? 0 : b;
    colorarm = "4px solid rgb("+r+","+g+","+b+")";
    console.log(colorarm);
    return colorarm;
}
function selectObject(){
    select = null;
    armaze.forEach((el) => {el.style.outline = "none";});
}

function messagem(){
    let object = document.createElement("p");
    object.textContent = "add scale";
    object.style.display= "flex";
    object.style.justifyContent= "center";
    object.style.alignItems = "center";
    object.style.width = "300px";
    object.style.height = "100px";
    object.style.fontSize = "50px";
    object.style.color = "white";
    object.style.background = "gray";
    document.querySelector("#stopbutton").appendChild(object);
    setTimeout(()=>{ object.remove();},2000);
}