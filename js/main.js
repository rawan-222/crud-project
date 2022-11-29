var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var myArray=[]
if(localStorage.getItem("bookinfo")!=null){
    myArray=JSON.parse(localStorage.getItem("bookinfo"))
    display()
}


function addBook(){
var book={
    name:input1.value,
URL:input2.value}
if(regex(book.name)&&regex2(book.URL)&&!error(book.name)&&!error2(book.URL)){
    myArray.push(book)
    clearValue();
    display();
    localStorage.setItem("bookinfo",JSON.stringify(myArray))
document.getElementById("alert").classList.remove("alert2")
document.getElementById("alert1").classList.remove("alert2")}
    else{
if(!regex(book.name)||input1.value==null){
        showError("Name is required")
    }
 if(!regex2(book.URL) || input2.value==null){
     showError2("Url Field is required") 
    }
if(error(book.name)){
    showError("this name already exist")
   
}
if(error2(book.URL))
{  showError2("this URL already exist")

}
}
    }
function error(name){
     for(var i=0;i<myArray.length;i++)
    {

        if(myArray[i].name==name){
           
           return true
        }
        
    }
    

}    
function error2(url){
    for(var i=0;i<myArray.length;i++){
        if(myArray[i].URL==url)
        {
          
            return true
        }
    }

}
   

function showError(Error){
    document.getElementById("alert").innerHTML=Error
    document.getElementById("alert").classList.add("alert2")
}
function showError2(error){
    document.getElementById("alert1").innerHTML=error
    document.getElementById("alert1").classList.add("alert2")
}




function clearValue(){
    input1.value="";
    input2.value=""
}
function display(){
  var cartona=""
    for(var i=0;i<myArray.length;i++){
cartona+=` <div class="d-flex py-4 px-3 my-3 myclass2 first ">
<div class="w-50 d-flex justify-content-between">
  <h2>${myArray[i].name}</h2>
 <div> 
  <a href="" id="visit" target=_blank><button class="myclass btn" onclick='visit(${i})'>visit</button></a>
  <button class="myclass1 myclass btn" onclick='deleteElement(${i})'>Delete</button>
 </div>
</div>
</div>`
    }
    document.querySelector(".myclass3").innerHTML=cartona
}

function deleteElement(index){
    myArray.splice(index,1)   
    localStorage.setItem("bookinfo",JSON.stringify(myArray))
    display()
}

function search(){
var cartona=""
    for(var i=0;i<myArray.length;i++)
    {
        if(myArray[i].name.toLowerCase().includes(document.getElementById("search").value.toLowerCase())){
           
            cartona+=` <div class="d-flex py-4 px-3 my-3 myclass2 first ">
            <div class="w-50 d-flex justify-content-between">
              <h2>${myArray[i].name}</h2>
             <div> 
              <button class="myclass btn">visit</button>
              <button class="myclass1 myclass btn" onclick='deleteElement(${i})'>Delete</button>
             </div>
            </div>
            </div>`
            
        }
        
    }
    document.querySelector(".myclass3").innerHTML=cartona
   ;
}
function visit(index){
document.getElementById("visit").href=myArray[index].URL
}
function regex(name){
    var regex=/^[a-z]{3,}$/
    return regex.test(name)
}
function regex2(url){
    var regex=/^https:\/\//
    return regex.test(url)
}

document.getElementById("search").addEventListener("keyup",search)
document.querySelector(".myclass").addEventListener("click",addBook)


