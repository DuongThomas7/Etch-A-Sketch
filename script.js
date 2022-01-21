//const container = document.querySelector('#container');

for (i=0; i<16; i++){
    const div = document.createElement('div');
    div.classList.toggle("colored");
    //container.appendChild(div);
    document.getElementById('test').appendChild(div);
}