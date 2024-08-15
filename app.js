let btn=document.querySelector('.task button');
let inp=document.querySelector('.task input');
let ol=document.querySelector('.add ol');

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    
    ol.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let itemlist=event.target.parentElement;
        itemlist.remove();
    }
});

// let delBtns=document.querySelectorAll('.delete');
// for (delBtn of delBtns){
//     delBtn.addEventListener("click" , function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
