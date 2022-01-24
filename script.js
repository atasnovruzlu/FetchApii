fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(text => {
        text.responseText;
        let html = '';
        text.forEach(element => {
            html += `       
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.address.street}</td>
            <td><a href="${element.website}" >${element.website}</a></td>
            </tr>                
            `
        });
        document.querySelector('.body').innerHTML += html;
    }).catch(err => {
        console.log(err);
    });