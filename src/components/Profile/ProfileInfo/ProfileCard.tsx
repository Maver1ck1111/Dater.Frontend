import type { Profile } from "../../../types/Profile";
import ProfileDetails from "./ProfileDetails";
import ProfileInterests from "./ProfileInterests";
import "./ProfileCard.css";
import { ProfileAvatar } from "./ProfileAvatar";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <ProfileAvatar
        accountID={profile.accountID}
        imagePaths={profile.imagePaths}
      />
      <div className="profile-body">
        <ProfileDetails
          name={profile.name}
          description={profile.description}
          gender={profile.gender}
          dateOfBirth={profile.dateOfBirth}
        />
        <ProfileInterests profile={profile} />
      </div>
    </div>
  );
}
