//store the products array in localstorage as "products"

function products(t,d,p,i){
  this.type=t;
  this.description=d;
  this.price=p;
  this.image=i;


}

function storeData(e){
  e.preventDefault();
  
    const form=document.getElementById("products");
    const type=form.type.value;
    const description=form.desc.value;
    const price=form.price.value;
    const image=form.image.value;
    let item1=new products(type,description,price,image)
    let data=JSON.parse(localStorage.getItem('products')) || [];
    data.push(item1);
    localStorage.setItem('products',JSON.stringify(data));
 console.log(item1)
}
