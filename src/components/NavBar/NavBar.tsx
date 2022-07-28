import './navbar.css'

const NavBar = () => {
    return(
    //   <nav className="navbar navbar-expand-lg col-8 m-auto blog-header rounded py-3">
    //       <h2 className="header-title">Reading Memo</h2>
    // </nav>

    <nav className="navbar col-8 m-auto navbar-expand-lg rounded py-3">
    <a className="navbar-brand" href="#"><h2 className="header-title">Reading Memo</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><p className="fw-bold">SignIn</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p className="fw-bold">SignUp</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p className="fw-bold">User DashBoard</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p className="fw-bold">Admin DashBoard</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p className="fw-bold">LogOut</p></a>
        </li>
      </ul>
      </form>
    </div>
</nav>
    )
}

export default NavBar

