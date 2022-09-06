let submit = document.getElementById('submit');
submit.addEventListener('click',display);

var blog = document.getElementById('blog');
url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).then((response)=> {
        return response.json();
    }
).then((data)=>{
        cards(data);
    }
).catch((error)=>{
   document.getElementById('blog').innerText = "Error :" + error;
});


function cards(data){
    for(let i of data)
    {
        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.style.width = "18rem";
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class','card-body');
        let h5 = document.createElement('h5');
        h5.setAttribute('class','card-title');
        h5.innerText = i.title;
        let p = document.createElement('p');
        p.setAttribute('class','card-text');
        p.innerHTML = i.body;
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        h5.append(p);
        blog.appendChild(card);
    }
}
function display()
{
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let title = document.getElementById('feedbackTitle').value;
    let feedback = document.getElementById('feedback').value;
    let mature = document.getElementById('mature');
    if(mature.checked == true)
    mature = "18+"
    else
    mature = "under age"
    let gender = document.getElementById('gender').value;
    console.log(name,date,title,feedback,mature,gender);

}