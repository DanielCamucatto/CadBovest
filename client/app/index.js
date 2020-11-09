let fields = [
    document.querySelector('#data'),
    document.querySelector('#value'),
    document.querySelector('#quantity')
];
console.log(fields);
let tbody = document.querySelector('table tbody');
console.log(tbody); 
document.querySelector('.form').addEventListener('submit', event =>{
    let tr = document.createElement('tr');
    fields.forEach(function(fields){
        let td = document.createElement('td');
        td.textContent = fields.value;
        tr.appendChild(td);
    })
})