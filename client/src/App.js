import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <UserProfile />
    </main>
  );
}

export default App;
