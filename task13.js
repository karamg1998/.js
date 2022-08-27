 let Names = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addUser = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let name = {
                Name: document.getElementById('name').value,
                Email: document.getElementById('email').value
            }
            Names.push(name);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {Names} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(Names, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyUserList', JSON.stringify(Names) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addUser);
        });