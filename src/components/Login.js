function Login(){

    function handleSubmit(event){
        event.preventDefault()
    }
    return(
        <div className="login_container">
            <header className="loginHeader">Login</header>

            <form className="loginForm" onSubmit={handleSubmit}>
                <div className="nameBox"><input
                    className="login-field"
                    placeholder="Name"/></div>
                <div className="passwordBox"><input
                    className="login-field"
                    placeholder="Password"/>
                    </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;
