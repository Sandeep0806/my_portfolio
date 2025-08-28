export default function ProfilePicture() {
  return (
    <div className="relative w-60 h-60 mx-auto rounded-full neon-glow">
      <img
        src="/profile.png" // replace with your profile image path
        alt="Profile"
        className="rounded-full object-cover w-full h-full"
      />
    </div>
  );
}
