document.addEventListener('DOMContentLoaded', function() {
    let aside = document.getElementsByTagName('aside')[0];
    let mainContent = document.getElementById('main-content');
    document.getElementById('hambarger-bar').addEventListener('click', function() {
        aside.classList.toggle('active');
        mainContent.classList.toggle('active');
    });

    //----------------------Dropdown----------------------
    let dropDown = document.getElementsByClassName('dropdown');
    Array.from(dropDown).forEach(element => {
        element.firstElementChild.addEventListener('click', function(e) {
            e.preventDefault();
            Array.from(dropDown).forEach(drop => {
                drop.lastElementChild.style.display = 'none';
            });
    
            this.nextElementSibling.style.display = this.nextElementSibling.style.display == 'block' ? 'none' : 'block';
            e.stopPropagation();
        })
    });
    document.addEventListener('click', function() {
        Array.from(dropDown).forEach(drop => {
            drop.lastElementChild.style.display = 'none';
        });
    });


    //----------------------Form Input----------------------
    let formInput = document.getElementsByClassName('form-group');
    let form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // console.log(formInput);
            for( let input of formInput) {
                // console.log(input.lastElementChild.className);
                if(input.lastElementChild.className.includes('error')) {
                    input.lastElementChild.remove();
                }
                let inputValue = input.firstElementChild.value.trim();
                let getNameAttr = input.firstElementChild.getAttribute('name');
                if(inputValue == '') {
                    let elementtag = document.createElement('p');
                    elementtag.classList.add('error', 'text-red', 'font-bold', 'text-sm');
                    elementtag.textContent = 'Required ' + getNameAttr + '.';
                    input.append(elementtag);
                }
            }
        });
    }

     
    
    fetchAPI();


});

function fetchAPI() {
    fetch('https://dummyjson.com/products/category/beauty', {
    method: 'GET'
    }).then(response =>{
        console.log(response);
        if(!response.ok) {
            throw new Error("network error");
        }
        return response.json();
    })
    .then(data => {
        let cardSec = document.getElementsByClassName('porduct-sec')[0];
        let productsData = data.products;
        // console.log(typeof productsData);
        productsData.forEach((element, index) => {
            // console.log(element, index);
            cardSec.innerHTML += `
            <div class="group border rounded-sm shadow-md overflow-hidden">
                <img src="${element.thumbnail}" class="transition-all group-hover:scale-125">
                <div class="bg-green-950 text-black p-3 pb-5 text-center transition-all group-hover:text-orange">
                    <h5 class="mb-3 text-lg text-blue">${element.title}</h5>
                    <p>${element.description.substring(0, 100)} ...</p>
                </div>
            </div>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
}