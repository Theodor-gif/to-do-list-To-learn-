const changeMode = document.querySelector('#circle-icon');
const baseMode = document.querySelector('#box-light');
const bodyElement = document.querySelector('body');
const mainBody = document.querySelector('#main');
const footerElement = document.querySelector('#copy');
const headerElement = document.querySelector('#head-list');
const newSection = document.querySelector('#list-container');
const addElement = document.querySelector('#submit-list');
const reasonList = document.querySelector('#to-do');



changeMode.addEventListener('click', () => {
    bodyElement.style.backgroundColor = "black";
    mainBody.style.backgroundColor = 'rgb(48, 48, 46)';
    footerElement.style.backgroundColor = 'rgb(32, 71, 81)';
    footerElement.style.color = 'white';
    headerElement.style.backgroundColor = 'rgb(32, 71, 81)';
    baseMode.style.justifyContent = 'right';


});

addElement.addEventListener('click', () => {
    const newList = document.createElement('section');
    newList.innerHTML = `
        <div id="list">
            <h2 id="task-name">${reasonList.value}</h2>
                <div id="list-btn">
                    <button type="submit" id="task-done">Check</button>
                    <button type="reset" id="task-delete">Delete</button>
                </div>
        </div>
    `;


    newSection.appendChild(newList);

    const check = newList.querySelector('#task-done');
    check.addEventListener('click', () => {
        check.classList.toggle('color');
    })

    newList.querySelector('#task-delete').addEventListener('click', () => {
        newList.remove();
    })

    
});


