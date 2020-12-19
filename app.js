const list = document.querySelector('#todo-list');
const photo = document.getElementById('moon');
const bg = document.getElementById('bg');
const form = document.forms['form'];
const wap = document.getElementById('input');
const body = document.querySelector('body');
const ul = document.querySelector('#todo-list');
const trigger = document.getElementById('trigger');
const mule = document.getElementById('mule');
var image_tracker = 'f';
var me = document.querySelector('#output');



photo.addEventListener('click', function change() {
                

    if (image_tracker == 'f') {
        photo.src = "images/icon-sun.svg";
        bg.src = "images/bg-desktop-dark.jpg";
        image_tracker = 't';
        form.style.backgroundColor = '#25273C';
        //input.style.backgroundColor = '#25273C';
        wap.classList.toggle('change');
        wap.placeholder = "Create new todo";
        body.style.backgroundColor = 'hsl(235, 15%, 11%)';
        body.style.color = '#f4f4f4';
        ul.style.backgroundColor = '#25273C';
        trigger.style.backgroundColor = '#25273C';
        trigger.firstElementChild.style.color = '#f4f4f4';
        trigger.lastElementChild.style.color = '#f4f4f4';
        trigger.firstElementChild.nextElementSibling.firstElementChild.style.color = '#f4f4f4';
        trigger.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.color = '#f4f4f4';
        trigger.firstElementChild.nextElementSibling.lastElementChild.style.color = '#f4f4f4';
        //trigger.firstElementChild.nextElementSibling.style.backgroundColor = '#25273C';
        mule.style.backgroundColor = '#25273C';
        mule.firstElementChild.style.color = '#f4f4f4';
        mule.lastElementChild.style.color = '#f4f4f4';
        mule.firstElementChild.nextElementSibling.style.color = '#f4f4f4';

    }
    else {
        photo.src="images/icon-moon.svg";
        bg.src = "images/bg-desktop-light.jpg";
        image_tracker = 'f';
        form.style.backgroundColor = '#fff';
        //input.style.backgroundColor = '#fff';
        wap.classList.toggle('carter');
        wap.placeholder = "Currently typing";
        body.style.backgroundColor = '#f1f1f1';
        body.style.color = '#000';
        ul.style.backgroundColor = '#fff';
        trigger.style.backgroundColor = '#fff';
        trigger.firstElementChild.style.color = 'grey';
        trigger.lastElementChild.style.color = 'grey';
        trigger.firstElementChild.nextElementSibling.firstElementChild.style.color = 'grey';
        trigger.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.color = 'grey';
        trigger.firstElementChild.nextElementSibling.lastElementChild.style.color = 'grey';
        mule.style.backgroundColor = '#fff';
        mule.firstElementChild.style.color = 'grey';
        mule.lastElementChild.style.color = 'grey';
        mule.firstElementChild.nextElementSibling.style.color = 'grey';
    }


});



form.addEventListener('submit', function submit(e){
    e.preventDefault();
    


    const data = form.querySelector('input[type="text"]').value;
    if(!data){
        alert('Write something to do');
    }
    else {
        //create elements

    const li = document.createElement('li');
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const label = document.createElement('label');

    //add contents 
    h3.textContent = data;
    span.textContent = "x";


    //add class
    li.classList.add('li');
    input.classList.add('input_class_checkbox');
    span.classList.add('cancel');
    li.setAttribute('draggable', true);
    li.setAttribute('data-item', 'active');
   
    //append to dom
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(h3);
    li.appendChild(div);
    li.appendChild(span);
    list.appendChild(li);

    const local = me.parentNode.previousElementSibling;

        const test = local.childElementCount;

        document.querySelector('#output').innerHTML = list.childElementCount + ' items left';
    form.reset();
    }
});

list.addEventListener('click', function(e){
    if(e.target.className == "cancel"){

         const li = e.target.parentElement;

         li.parentNode.removeChild(li);

         const local = me.parentNode.previousElementSibling;

        const test = local.childElementCount;

        document.querySelector('#output').innerHTML = list.childElementCount + ' items left';
    }

});

list.addEventListener('click', function(a) {
    if(a.target.className == "input_class_checkbox") {

        const li = a.target.parentElement;
        const myh3 = li.lastChild;
        
        
        
        myh3.classList.toggle('any');
    }
});


list.addEventListener('mouseover', function(b){
    if(b.target.className == "input_class_checkbox"){

        const fry = b.target.parentElement.parentElement;
        //console.log(fry);

        const myspan = fry.lastElementChild;
        //console.log(myspan);

        myspan.style.opacity = "1";
    }
});

const local = me.parentNode.previousElementSibling;

const test = local.childElementCount;

document.querySelector('#output').innerHTML = list.childElementCount + ' items left';



var clear = document.querySelector('#clear-completed');

clear.addEventListener('click', function(){
    const v = list.children;

    Array.from(v).forEach(function(li){
    const see =  li.firstElementChild.firstElementChild;
        
    if(!see.checked){
        //alert("You haven't completed any tasks.Tick if you've done that");
    }else {
            const none = see.parentElement.parentElement;
            console.log(none);
            none.parentElement.removeChild(li);
            const local = me.parentNode.previousElementSibling;
            
            const test = local.childElementCount;
            console.log(test);
        
            document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
    }
    });
});

list.addEventListener('mouseover', function(e){
    const shady = list.children;

    Array.from(shady).forEach(function(li){
    const see =  li.firstElementChild.firstElementChild;
    const wag =  see.parentElement.parentElement; 
    if(see.checked){
      console.log(wag);

      wag.setAttribute('data-item', 'completed');
    }
    else if(!see.checked) {
        wag.setAttribute('data-item', 'active');
    }
    else {
        wag.removeAttribute('data-item', 'completed');
        wag.setAttribute('data-item', 'active');
        //console.log(wag);
    }

    });
});


let sortBtn = document.querySelector('#aac').children;
let sortItem = document.querySelector('#todo-list').children;


for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
            document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
        }

        this.classList.add('current');
        document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
        

        let targetData = this.getAttribute('data-target');
        document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');
            document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
                document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
            }
            document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
        }
        document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
    });
    document.querySelector('#output').innerHTML = list.childElementCount + ' item(s) left';
};











































