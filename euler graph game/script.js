var line;
var existment, existment1, existment2;
class graph{
    constructor(v,e){
        this.vertices = v;
        this.edges = e;
        this.degreeArr = [];
        this.graphtype = 0;
        this.poles = [];
        this.length = this.vertices.length;
        this.checkCorrectness();
    }
    checkCorrectness(){
        for(let i in this.vertices){
            this.degreeArr[i] = 0;
        }
        for(let j in this.edges){
           this.degreeArr[this.edges[j][0]]++;
           this.degreeArr[this.edges[j][1]]++;
        }
        for(let i in this.vertices){
            if(this.degreeArr[i]%2==1){this.graphtype++; this.poles.push(this.vertices[i]);}
        }
        this.graphtype = this.graphtype > 2 ? "invalid" : this.graphtype;
    }
    vertexbuild(){
        var div;
        for(let i in this.vertices){
            div = document.createElement("div");
            div.className = "vertex";
            div.id = "vertex "+i;
            div.style.left = this.vertices[i][0]-20;
            div.style.top = this.vertices[i][1]-20;
            div.style.position = "absolute";
            div.style.userSelect = "none";
            div.style.fontSize = 40;
            div.innerText = "🔴";
            oldinnertext[i] = "🔴";
            div.onmouseover = mouseOverEvent(i);
            div.onmouseout = mouseOffEvent(i);
            div.onclick = verticeClick(i);
            document.body.appendChild(div);
        }  
    }
    edgebuild(){
        var hr;
        for(let i in this.edges){
            if(this.edges[i]!==undefined){
                hr = document.createElement("hr");
                hr.className = "edge";
                hr.id = "edge "+i;
                var coord = [this.vertices[this.edges[i][0]][0], this.vertices[this.edges[i][0]][1], this.vertices[this.edges[i][1]][0], this.vertices[this.edges[i][1]][1]];
                hr.style.left = coord[0];
                hr.style.top = coord[1];
                var deltaX = (coord[2] - coord[0]);
                var deltaY = (coord[3] - coord[1]);
                hr.style.width = Math.floor(Math.sqrt(deltaY**2 + deltaX**2));
                var slope = Math.atan(deltaY/deltaX);
                hr.style.transform = `rotate(${slope + (Math.sign(deltaX)-1)*3.1415926/2}rad)`;
                document.body.appendChild(hr);
            }
        }
    }
    rebuild(){
        removeElementsByClass("edge");
        this.edgebuild();
    }
}

function removePX(str){
    return Number(str.substring(0,str.length-2));
}
function arraycompare(a,b){
    if(a === undefined || b === undefined || a.length!=b.length) return false; 
    else{ 
        for(let i = 0; i < a.length; i++) if(a[i]!=b[i]) return false;

        return true; 
    } 
}
function existsIn(el, arr){
    for(let h in arr){
        h = parseInt(h);
        console.log(arr[h], el);
        if(arraycompare(arr[h], el)){
            return h;
        }
    }
    return false;
}
function defined(a,b){
    if(typeof(a)=="number") return a;
    else if (typeof(b)=="number") return b;
    else return false;
}
function allundef(arr){
    for(let i in arr)if(arr[i]!==undefined)return false;
    return true;
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function verticeClick(j){
    return function(evt){
        divs[j].innerText = "🟠";
        oldinnertext[j] = "🟠";
        for(let k = 0; k < divs.length; k++){
            k+= k==j?1:0;
            divs[k].onclick = eventListenerForOtherVertices(k,j);
        }
    }
}
function eventListenerForOtherVertices(k,j){
    return function(evt){
        prevCoordinates = [removePX(divs[j].style.left)+20, removePX(divs[j].style.top)+20];
        existment1 = existsIn([k,j], experiment.edges);
        existment2 = existsIn([j,k], experiment.edges);
        existment = defined(existment1, existment2);
        if(typeof(existment) == "number"){
            line = document.createElement('hr');
            line.className = "line";
            experiment.edges[existment] = undefined;
            console.log(experiment.edges);
            var deltaX = (removePX(divs[k].style.left)+20 - prevCoordinates[0]);
            var deltaY = (removePX(divs[k].style.top)+20 - prevCoordinates[1]);
            line.style.width = Math.floor(Math.sqrt(deltaY**2 + deltaX**2));
            var slope = Math.atan(deltaY/deltaX);
            line.style.left = prevCoordinates[0];
            line.style.top = prevCoordinates[1];
            line.style.transform = `rotate(${slope + (Math.sign(deltaX)-1)*3.1415926/2}rad)`;
            divs[j].innerText = "🔴";
            oldinnertext[j] = "🔴";
            experiment.rebuild();
            document.body.appendChild(line);
            
            if(allundef(experiment.edges)) alert("YOU WIN!");
            else {divs[j].onclick = eventListenerForOtherVertices(j,k);
            verticeClick(k)(0);}
            
        }
    }
}