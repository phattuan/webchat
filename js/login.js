let router_register = document.querySelector('.log_in .login_register .container_login .container_form .log_in .container_elemt #register');
let router_login = document.querySelector('.log_in .login_register .container_register .container_form .register .container_elemt #login');
let pane_register = document.querySelector('.log_in .login_register .container_register');
let pane_login = document.querySelector('.log_in .login_register .container_login');

router_register.addEventListener('click',()=>{
    pane_login.classList.add('remove');
    pane_register.classList.add('active');
});

router_login.addEventListener('click', ()=>{
    pane_login.classList.remove('remove');
    pane_register.classList.remove('active');
})