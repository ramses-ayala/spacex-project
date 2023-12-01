import { Outlet, Link } from "react-router-dom"

import logo from "../../assets/logo.jpeg";



const Navbar = () => {
  return (
    <>
        <header>
            <nav className="navbar navbar-light bg-black">
                <div className="container-xl d-flex justify-content-center">
                    <Link className="navbar-brand text-white" to={`/spacex-project`}>
                        <img src={logo} className="d-inline-block align-text-top" style={{height: '3rem'}}/>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </header>
    </>
  )
}

export default Navbar