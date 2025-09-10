import "./ProfileCard.css";

interface ProfileDetailsProps {
  name: string;
  description: string;
  gender: string;
  dateOfBirth: Date;
}

export default function ProfileDetails({
  name,
  description,
  gender,
  dateOfBirth,
}: ProfileDetailsProps) {
  return (
    <div className="profile-details">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <b>Пол:</b> {gender}
      </p>
      <p>
        <b>Дата рождения:</b>{" "}
        {new Date(dateOfBirth).toLocaleDateString("uk-UA")}
      </p>
    </div>
  );
}
