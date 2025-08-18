import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h3>{localStorage.getItem("AccessToken")}</h3>
      <br />
      <h3>{localStorage.getItem("RefreshToken")}</h3>
    </>
  );
}

export default App;
