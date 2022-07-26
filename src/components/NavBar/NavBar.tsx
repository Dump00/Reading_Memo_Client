import './navbar.css'

const NavBar = () => {
    return(
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-8 text-center">
        <h2 className="header-title">Reading Memo</h2>
      </div>
      <div className="col-2 justify-content-end align-items-center">
        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>
    )
}

export default NavBar