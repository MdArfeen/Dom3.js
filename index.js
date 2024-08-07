//let arr=[1,2,3,4,];
//localStorage.setItem("arr",arr)
//localStorage.setItem("obj", {a:1 , b:2})
//let value=localStorage.getItem("arr")
//let value1=localStorage.getItem("obj")
//console.log(typeof value)
//console.log(typeof value1)
//local storage convent non-primitive data type to primitive data type
//let arr=[1,2,3,4,5]
//localStorage.setItem("array",JSON.stringify(arr))
//let value=JSON.parse(localStorage.getItem("array"))
//console.log(typeof value)
//let obj={a:1,b:2}
//localStorage.setItem("objs",JSON.stringify(obj))
//let value=JSON.parse(localStorage.getItem("objs"))
//console.log(typeof value)
//localStorage.setItem("arr",["str1","str2"])
//how to remove data from local storage
//localStorage.removeItem("arr")
//how to remove entire local storage
//localStorage.clear()
let todoName=document.querySelector("#container>input")
let priority=document.querySelector("#container>select")
let addTodoBtn=document.querySelector("#container>button")
let tableBody=document.querySelector("#table-container>tbody")
let data=[]
function SaveData(){
    localStorage.setItem("data",JSON.stringify(data))
}
function LoadData(){
let storedValue=JSON.parse(localStorage.getItem("data"))// null for 1st time user
if(storedValue){
    data=storedValue
    showData(data)
}
}
function HandleClick(){
    let obj={
        title:todoName.value,
         priority:priority.value
    }
    data.push(obj)
    
    SaveData()
    showData(data)
    console.log(data)
}
function showData(arr){
//console.log(arr)
 tableBody.innerHTML=""
arr.forEach(function(ele,i){
    let tr =document.createElement("tr")
    let td1=document.createElement("td1")
    td1.innerHTML=`${ i + 1 }`

    let td2=document.createElement("td2")
    td2.innerHTML=ele.title

    let td3=document.createElement("td3")
    td3.innerHTML=ele.priority
    if(ele.priority=="high"){
        td3.style.backgroundColor="red"
    }else if(ele.priority=="med"){
        td3.style.backgroundColor="blue"
    }else{
        td3.style.backgroundColor="orange"
    }

    let td4=document.createElement("td4")
    let btn=document.createElement("button")
    btn.innerHTML="Delete"
    btn.addEventListener("click", function(){
        handleDelete(i)
    })
    td4.append(btn)

    tr.append(td1,td2,td3,td4)
    tableBody.append(tr)
});
}
addTodoBtn.addEventListener("click",HandleClick)
LoadData()
function handleDelete(index){
console.log(index)
data.splice(index,1)
SaveData()
showData(data)
}