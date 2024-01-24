"use strict"

let search = document.querySelector("#search");
let p_tags = document.querySelectorAll(".pname");
let alertmsg = document.querySelector("h3");
console.log(p_tags);
let value=0;

search.addEventListener("keyup",()=>{
 
    let Change_Uppercase_value = search.value.toUpperCase();
    console.log(Change_Uppercase_value);
    let str=1;
   
    p_tags.forEach((Product_name,index) => {
        value=p_tags[index].parentElement;
        value.classList.add("opacity");
        Product_name = Product_name.innerHTML.toUpperCase();
        console.log(Product_name);
        if(Product_name.includes(Change_Uppercase_value) ){
                value.classList.remove("opacity");
                alertmsg.classList.remove("no_math_product_name");
                str=0;
        }
    });

    if(str)
    {
        alertmsg.classList.add("no_math_product_name");
    }

})