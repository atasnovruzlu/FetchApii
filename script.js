fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(text => {
        text.responseText;
        text.forEach(element => {
            setTimeout(function () {
                document.querySelector('.loading').style.display = 'none';
                let html = '';
                html += `       
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.address.street}</td>
            <td><a href="${element.website}" >${element.website}</a></td>
            </tr>                
            `
                document.querySelector('.body').innerHTML += html;
            }, 1500)

        });
    }).catch(err => {
        console.log(err);
    });