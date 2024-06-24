export class Product{
    constructor(id,name,seller,size,rating){
        this.id=id
        this.name=name;
        this.seller=seller;
        this.size=size;
        this.rating=rating;
    }
    static products=[
    new Product(1,"Shampoo","Deepak Sellers and Co.",[],4.7),
    new Product(2,"Women Skirt","Vivek Sellers and Co.",["XL","XXL","L"],3.5),
    new Product(3,"Mens Jeans","Atal Distributors",["XL","XXXL","M"],2.7)
];
static create(body){
    const name=body.name;
    const seller=body.seller;
    const size=body.size;
    const rating=body.rating;
    // const{name,seller,size,rating}=body;
    const newProduct=new Product(name,seller,size,rating);
    Product.products.push(newProduct);
    return newProduct;
}
static getAll(){
    return Product.products;//the array of products are returned
}
static delete(body){//deleting the product by its id
    const{id}=body;
    Product.products.find((prod)=>{
        if(prod.id==id){
            const indx=Product.products.indexOf(prod)
          Product.products.splice(indx,1);
          console.log(Product.products);
        }
    });
    return Product.products;//deleted array
}
}