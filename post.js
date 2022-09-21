function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>display(data))
}
function display(data){
  const user=document.getElementById('user');
  for(const post of data){
      const div=document.createElement('div');
      div.classList.add('post')
      div.innerHTML=`<h1>${post.title}</h1>
      <p>${post.body}</p>`
      user.appendChild(div)
  }
 
}