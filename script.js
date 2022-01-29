const container = document.querySelector('.container');

for (i=0; i<16; i++){
    const row = document.createElement('div');
    row.classList.toggle("row");
    for (j = 0; j < 16; j++){
        const color = document.createElement('div');
        color.classList.toggle("paint");
        row.appendChild(color);
        
    }
    console.log('row');
    container.appendChild(row);
}

