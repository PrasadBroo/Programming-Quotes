const result = document.querySelector('.result');
const qBtn = document.querySelector('.qbtn');
const form = document.querySelector('form');
const quoteAuthor = document.getElementById('author');
const quoteContent = document.getElementById('quote-info');
const loader = document.getElementById('loader');

qBtn.addEventListener('click',()=>{result.classList.toggle('d-none');form.classList.toggle('d-none')});
form.addEventListener('submit',submitForm);

const colors = ['alert-primary','alert-secondary','alert-success','alert-danger','alert-info','alert-warning','alert-dark','alert-primary','alert-secondary','alert-success','alert-danger','alert-info','alert-warning','alert-dark']

function generateClr(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


async function showQuotes(){
    const res = await fetch('/getquotes');
    const data = await res.json();
    const html_to_go =  data.map(ele =>{
       return `<blockquote class="blockquote alert ${generateClr()} p-3 mt-3 rounded">
        <p class="mb-0 ">${ele.authorContent}</p>
        <footer class="blockquote-footer">${ele.author}</footer>
      </blockquote>`
    })
    result.innerHTML = html_to_go.join('');
    loader.classList.add('d-none');
}
showQuotes();

function submitForm(){
    // var data = {author:quoteAuthor.value,authorContent:quoteContent.value};

    // var options = {
    //     method:'POST',
    //     body:JSON.stringify(data),
    //     headers:{
    //         'Content-type':'application/json'
    //     }
    //     }
    //     fetch('/postQuote',options);
    console.log('hi');
        
        
}



