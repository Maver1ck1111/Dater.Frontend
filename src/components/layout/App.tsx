import { Navigate } from 'react-router-dom';
import NavBar from './NavBar'

function App() {
  const token = localStorage.getItem("AccessToken");

  return (
    token ? (
      <>
        <NavBar />
        <h3>{localStorage.getItem("AccessToken")}</h3>
        <br />
        <h3>{localStorage.getItem("RefreshToken")}</h3>
      </>
    ) : <Navigate to="/login"/>
  )
}

export default App
