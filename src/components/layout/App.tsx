import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Api/Axios";
import type { Profile } from "../../types/Profile";
import ProfileCard from "../Profile/ProfileInfo/ProfileCard";

function App() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      const accessToken = localStorage.getItem("AccessToken");

      if (!accessToken) {
        navigate("/register");
        return;
      }

      const decode = jwtDecode(accessToken);

      try {
        const { data } = await api.get<Profile>(`/profile/${decode.sub}`);
        setProfile(data);
      } catch (err) {
        console.error("Failed to load profile", err);
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile found</div>;
  }

  return <ProfileCard profile={profile} />;
}

export default App;
