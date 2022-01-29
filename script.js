const container = document.querySelector('.container');

for (i=0; i<16; i++){
    const column = document.createElement('div');
    column.classList.toggle("column");
    for (j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.toggle("paint");

        square.addEventListener("mouseover", () => {
            square.style["background-color"] = "blue";
            square.style.height = 960/16;
            square.style.weight = 960/16;
        });

        column.appendChild(square);
        
    }
    container.appendChild(column);
}

const tile = document.querySelectorAll(".paint");

const reset = document.querySelector(".reset");


reset.addEventListener("click", () => {
    const gridColumn = document.querySelectorAll(".column");
    gridColumn.forEach(column => {
        container.removeChild(column);
    })

    let userGrid = prompt("Enter the # of squares per side: ");
    for (i=0; i<userGrid; i++){
        const column = document.createElement('div');
        column.classList.toggle("column");
        for (j = 0; j < 16; j++){
            const square = document.createElement('div');
            square.classList.toggle("paint");

            square.addEventListener("mouseover", () => {
                square.style["background-color"] = "blue";
                square.style.height = 960/16;
                square.style.weight = 960/16;
            });

            column.appendChild(square);
            
        }
        container.appendChild(column);
    }
})