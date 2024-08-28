import React from 'react';
import { profileCardData } from '@/data/profileData';

const ProfileCard: React.FC = () => {
  const { name, email, phone, profileImageUrl, location, bio, onEditClick, onSaveLocation, onSaveBio } = profileCardData;
  
  const [editLocation, setEditLocation] = React.useState(location);
  const [editBio, setEditBio] = React.useState(bio);

  return (
    <section className="bg-white p-6 rounded-custom shadow-md flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-500">{email}</p>
          <p className="text-gray-500">{phone}</p>
        </div>
        <button className="ml-auto text-primary" onClick={onEditClick}>Edit</button>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
          value={editLocation}
          onChange={(e) => setEditLocation(e.target.value)}
        />
        <button
          className="mt-2 bg-primary text-white p-2 rounded-custom hover:bg-opacity-90"
          onClick={() => onSaveLocation(editLocation)}
        >
          Save changes
        </button>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Bio</label>
        <textarea
          className="mt-1 p-2 w-full border rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          value={editBio}
          onChange={(e) => setEditBio(e.target.value)}
        />
        <button
          className="mt-2 bg-primary text-white p-2 rounded-custom hover:bg-opacity-90"
          onClick={() => onSaveBio(editBio)}
        >
          Save changes
        </button>
      </div>
    </section>
  );
};

export default ProfileCard;
