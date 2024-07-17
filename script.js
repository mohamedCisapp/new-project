document.getElementById('login').addEventListener('click', sendData);
document.getElementById('signup').addEventListener('click', sendData);

function sendData(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://newproject-a895.restdb.io/rest/newusers', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'x-apikey': "6696ed2ecf911687f3bd7c7c",
        },
        body: JSON.stringify({
            data: {
                'email': email,
                'password': password,
            }
        },
        )
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // document.getElementById('result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerText = 'An error occurred';
        });
}
