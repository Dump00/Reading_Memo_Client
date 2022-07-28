import './signup.css'

const SignUp = () => {
    return(
        <div className="text-center">
        <main className="form-signin">
            <form>
                <h1 className="h3 mb-3 fw-normal">Get Started With Your Account</h1>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="floatingInput" placeholder="username" />
                    <label htmlFor="floatingInput">UserName</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="floatingInput" placeholder="email" />
                    <label htmlFor="floatingEmail">email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-dark" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted fw-bold">&copy; 2022</p>
            </form>
        </main>
    </div>
    )
}

export default SignUp