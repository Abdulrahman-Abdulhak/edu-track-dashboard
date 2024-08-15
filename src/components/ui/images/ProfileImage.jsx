import { initials } from "../../../utils";

function ProfileImage({ size, account = { photo, name: "", email: "" } }) {
  return (
    <div
      className="overflow-hidden rounded-full aspect-square grid place-items-center text-black"
      style={{ width: size, height: size }}
    >
      {account.photo ?? (
        <div className="w-full h-full bg-brand-100 text-lg grid place-items-center">
          {initials(account.name).toUpperCase()}
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
