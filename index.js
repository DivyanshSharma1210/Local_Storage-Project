document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    const goToLogin = document.getElementById('goToLogin');
    const goToSignup = document.getElementById('goToSignup');
    
    goToLogin.addEventListener('click', () => {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    goToSignup.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    document.getElementById('signup').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.username === username);

        if (userExists) {
            alert('User already exists. Please log in.');
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! You can now log in.');
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });

    document.getElementById('login').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    });
});
