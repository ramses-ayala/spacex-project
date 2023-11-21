import { Outlet, Link } from "react-router-dom"



const Navbar = () => {
  return (
    <>
        <header>
            <nav className="navbar navbar-light bg-black">
                <div className="container-xl">
                    <Link className="navbar-brand text-white" to={`/`}>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Ftech-companies%2Fspacex-logo&psig=AOvVaw1d2635MRODhFdP6-eGegAW&ust=1700679409681000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCBstLi1YIDFQAAAAAdAAAAABAJ" className="d-inline-block align-text-top" />
                        Space-x
                    </Link>
                </div>
            </nav>
            <Outlet />
        </header>
    </>
  )
}

export default Navbar