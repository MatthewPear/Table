//////////////////TASK1
// const inputRow = document.getElementById('rowInput');
// const inputData = document.getElementById('dataInput');
// const btnMark = document.getElementById('button');
// btnMark.addEventListener('click', () => markCell());

// function markCell () {
//     console.log("row:", inputRow.value);
//     console.log("data:", inputData.value);

//     const clearCell = [...document.getElementsByName('data')];
//     clearCell.forEach((el) => {
//         el.classList.remove("redData");
//         el.classList.add("data");
//     })
    
//     myCell = document.getElementById("row" + inputRow.value + "data" + inputData.value)
//     // myCell = document.getElementById("myTable").rows[inputRow.value].cells.namedItem("data" + inputData.value);
//     console.log("myCell: ", myCell);
//     myCell.classList.add("redData");
// }
//////////////////////TASK2

const inputRow = document.getElementById('rowInput');
const inputData = document.getElementById('dataInput');
const btnDraw = document.getElementById('btnDraw');
btnDraw.addEventListener('click', () => drawTable());

let c = 0;
const counter = document.getElementById('counter');
counter.textContent = c;

let activeCell = 1 + '-' + 1;
let pointCell = 2 + '-' + 2;

let direction = 'Right';
let myInterval;

let over = false;

function drawTable () {
    const clearTable = [...document.getElementsByClassName('table')];
    if (clearTable.length) {
        clearTable.forEach((el) => {
            el.remove();
        })
    }

    const myTable = document.createElement("TABLE");
    myTable.setAttribute("id", "myTable");
    myTable.classList.add("table");
    document.body.appendChild(myTable);

    const tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody")
    myTable.appendChild(tblBody);

    for (let i = 1; i < (+inputRow.value + 1); i++) {
        const myRow = document.createElement("TR");
        myRow.setAttribute("id", i);
        myRow.classList.add("row");
        tblBody.appendChild(myRow);

        for (let j = 1; j < (+inputData.value + 1); j++) {
            const myData = document.createElement("TD");
            let cellID = i + '-' + j;
            myData.setAttribute("id", cellID);
            myData.setAttribute("name", "data");
            myData.classList.add("data");
            myRow.appendChild(myData);
        }
    }

    let a = Math.floor((Math.random() * (+inputRow.value)) + 1);
    let b= Math.floor((Math.random() * (+inputData.value)) + 1);
    console.log('a', a);
    console.log('b', b);

    pointCell = document.getElementById(a + '-' + b);
    pointCell.classList.add("point-data");
    pointCell = a + '-' + b;

    let x = Math.floor((Math.random() * (+inputRow.value)) + 1);
    let y = Math.floor((Math.random() * (+inputData.value)) + 1);
    console.log('x', x);
    console.log('y', y);

    activeCell = document.getElementById(x + '-' + y);
    activeCell.classList.add("active-data");
    activeCell = x + '-' + y;

    myInterval = setInterval(moveCell, 1000);
}

console.log('activeCell', activeCell)

const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
btnUp.addEventListener('click', () => {
    direction = 'Up';
    moveCell();
});
btnDown.addEventListener('click', () => {
    direction = 'Down';
    moveCell();
});
btnLeft.addEventListener('click', () => {
    direction = 'Left';
    moveCell();
});
btnRight.addEventListener('click', () => {
    direction = 'Right';
    moveCell();
});

document.addEventListener('keydown', (event) => {
    console.log('keybord:', event)
    console.log('click on:', event.key)

    if (event.key === 'ArrowUp') {
        direction = 'Up';
        moveCell();
    } else if (event.key === 'ArrowDown') {
        direction = 'Down';
        moveCell();
    } else if (event.key === 'ArrowLeft') {
        direction = 'Left';
        moveCell();
    } else if (event.key === 'ArrowRight') {
        direction = 'Right';
        moveCell();
    }
})

// if (alert === true) {
//     over = true;
// }


function moveCell () {
    if(over===false) {
        console.log('direction', direction);

        const clearCell = [...document.getElementsByName('data')];
        clearCell.forEach((el) => {
            el.classList.remove("active-data");
            el.classList.add("data");
        })

        if (direction === 'Up') {
                activeCell = (+activeCell.split('-')[0] - 1) + '-' + activeCell.split('-')[1];
                if(+activeCell.split('-')[0] === 0){
                    activeCell = (+activeCell.split('-')[0] + 1) + '-' + activeCell.split('-')[1];
                    alert('GAME OVER!');
                    clearInterval(myInterval);
                    over = true;
                }
        } else if (direction === 'Down') {
                activeCell = (+activeCell.split('-')[0] + 1) + '-' + activeCell.split('-')[1];
                if(+activeCell.split('-')[0] === (+inputRow.value + 1)){
                    activeCell = (+activeCell.split('-')[0] - 1) + '-' + activeCell.split('-')[1];
                    alert('GAME OVER!');
                    clearInterval(myInterval);
                    over = true;
                }
        } else if (direction === 'Left') {
                activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] - 1);
                if(+activeCell.split('-')[1] === 0){
                    activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] + 1);
                    alert('GAME OVER!');
                    clearInterval(myInterval);
                    over = true;
                }
        } else if (direction === 'Right') {
                activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] + 1);
                if(+activeCell.split('-')[1] === (+inputData.value + 1)){
                    activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] - 1);
                    alert('GAME OVER!');
                    clearInterval(myInterval);
                    over = true;
                }
        }

        let nextCell = document.getElementById(activeCell);
        nextCell.classList.add("active-data");
        console.log('activeCellID', activeCell)

        if(activeCell === pointCell){
            let removeCell = document.getElementById(pointCell);
            removeCell.classList.remove("point-data");
            c = c + 1;
            counter.textContent = c;

            let a = Math.floor((Math.random() * (+inputRow.value)) + 1);
            let b= Math.floor((Math.random() * (+inputData.value)) + 1);
            console.log('a', a);
            console.log('b', b);

            pointCell = document.getElementById(a + '-' + b);
            pointCell.classList.add("point-data");
            pointCell = a + '-' + b;
        }
    }
}
console.log('over:', over);