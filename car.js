function load(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
   const ul=document.getElementById('user')
   for(const users of data){
       const li=document.createElement("li");
       li.innerHTML=`name:${users.name}`;
       ul.appendChild(li)
   }
}