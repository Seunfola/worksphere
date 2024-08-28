// profileCardData.ts
export const profileCardData = {
  name: "Ronald Richards",
  email: "RonaldRich@example.com",
  phone: "(219) 555-0114",
  profileImageUrl: "/path/to/profile.jpg",
  location: "California",
  bio: "Hi 👋, I'm Ronald, a passionate UX designer with 10 years of experience...",
  onEditClick: () => console.log('Edit Profile'),
  onSaveLocation: (location: string) => console.log('Save Location:', location),
  onSaveBio: (bio: string) => console.log('Save Bio:', bio),
};
