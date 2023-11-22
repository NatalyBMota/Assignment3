import React from 'react';
// import Form from './Form';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

/*
function createSignForm(){

    const isNewUser = true;

    if (isNewUser) {
        return (
            <div>
                <Form />
            </div>
        ); 
    } else {
        return (
            <h1>Something</h1>
            //<div>
            //	<h1>Login</h1>
            //	<input type="text" placeHolder="Email" />
            //	<input type="text" placeHolder="Password" />
            //	<button>Login</button>
            //</div>
        ); 
    }
}

function App() {
    return(<div>
	{createSignForm()}
    </div>);
}
*/

function App() {
    return <div>
        <Header />
        <Navbar />
        <Main />
        <Footer />
    </div>;
}

export default App;