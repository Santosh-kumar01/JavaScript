//generate a random color

// const randomColor = function(){
//     const hex = '0123456789abcdef';
//     let color = '#';
//     for(let i = 0; i < 6; i++){
//         color += hex(Math.floor(Math.random() * 16));
//     }
//     return color;
// };

// const startChangingColor = function(){}
// const stopChangingColor = function(){}
// document.querySelector("#start").addEventListener
// ('click', startChangingColor)

// document.querySelector("#stop").addEventListener
// ('click', stopChangingColor)


const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML =`
    <div class = 'color'>

    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

    </div>
    `;
});