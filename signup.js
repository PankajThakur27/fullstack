document.getElementById('submit-btn').addEventListener('click', (e) => {

    e.preventDefault()

    user_fname = document.getElementById('first-name').value
    user_lname = document.getElementById('last-name').value
    // user_contact = document.getElementById('contact').value
    user_email = document.getElementById('email').value
    user_password = document.getElementById('password').value
    console.log(user_fname);
    console.log(user_lname);
    // console.log(user_contact);
    console.log(user_email);
    console.log(user_password);

    user = {
        fname: user_fname,
        lname: user_lname,
        // contact: user_contact,
        email: user_email,
        password: user_password
    }
    console.log(user);

    const xhr = new XMLHttpRequest()
    url = `http://localhost:8082/users`
    xhr.open('POST', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin','*')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(user);

        }
    }
    xhr.send(JSON.stringify(user))


    window.location.href='../index.html'
})