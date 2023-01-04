
const inputbox = document.getElementById('inputBox');
// inputbox.addEventListener('keyup',()=>{
//     const table = document.querySelector('table');
//                console.log('ki',table.rows.length);
//                for (let i = 1; i < table.rows.length; i++) {
//                   table.deleteRow(i);
//                }
//            });

 inputbox.addEventListener('keyup',()=>{
fetch('https://reqres.in/api/users?page')              // its a promise.
.then((response) => response.json())
.then((result) => {
    document.getElementById('target').innerHTML = '';
    result.data.forEach(element => {
        const row = `<tr>
                        <td>${element.id}</td>
                        <td><img src="${element.avatar}"></td>
                        <td>${element.first_name} ${element.last_name}</td>
                        <td>${element.email}</td>
                    </tr>
                        `;           
            const value = inputbox.value;
            // const choice = value in element.email;
            const choice = element.email.slice(0,(value.length));
            
            console.log(choice,value);
            if(value == choice){
                document.getElementById('target').innerHTML += row;
            }
        });    
    });
});
