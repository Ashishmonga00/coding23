function append(){
    let data=JSON.parse(localStorage.getItem('products')) || [];
    let all_products = document.getElementById("all_products");
    data.forEach(function(el,index){
        
        let div=document.createElement('div');

       let img=document.createElement('img');
       img.src=el.image;
       let p1 = document.createElement('h1');
       p1.innerText=el.type;
       let p2 = document.createElement('h1');
       p2.innerText=el.price;
       let p3 = document.createElement('h1');
       p3.innerText=el.description;
       
       let button=document.createElement('button');
       button.innerText="remove";
       button.addEventListener("click",function(){
        deleteall(el,index);
       })

       div.append(img,p1,p2,p3,button);
       all_products.append(div)
    })
    
  

}
append();
function deleteall(){
    
    console.log(event.target.parentNode.remove())

}