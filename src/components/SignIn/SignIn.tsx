import './signin.css'

const SignIn = () => {
    return(
        <div className="text-center">
            <main className="form-signin">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" placeholder="username" />
                        <label htmlFor="floatingInput">UserName</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        </div>
    )
}

export default SignIn