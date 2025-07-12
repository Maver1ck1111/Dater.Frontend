import './Navbar.css'

export default function NavBar() {
  return (
    <nav className='navBar'>
        <img src="/bell.svg"/> 

        <div className='options'>
            <img src="/bell.svg"/>
            <img src="/chat-circle.svg"/>
            <img src="/user.svg"/>
        </div>
    </nav>
  )
}
