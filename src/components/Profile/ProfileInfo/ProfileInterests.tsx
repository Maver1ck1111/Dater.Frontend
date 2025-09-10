import type { Profile } from "../../../types/Profile";
import "./ProfileCard.css";

interface ProfileInterestsProps {
  profile: Profile;
}

export default function ProfileInterests({ profile }: ProfileInterestsProps) {
  const interests = [
    { label: "📚 Books", value: profile.bookInterest },
    { label: "⚽ Sports", value: profile.sportInterest },
    { label: "🎬 Movies", value: profile.movieInterest },
    { label: "🎵 Music", value: profile.musicInterest },
    { label: "🍔 Food", value: profile.foodInterest },
    { label: "🎨 Hobbies", value: profile.hobbyInterest },
    { label: "🌿 Lifestyle", value: profile.lyfestyleInterest },
    { label: "✈️ Travel", value: profile.travelInterest },
  ];

  return (
    <div className="profile-interests">
      <h3>Interests</h3>
      <ul>
        {interests.map(
          (item, i) =>
            item.value && (
              <li key={i}>
                {item.label}: {item.value}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
