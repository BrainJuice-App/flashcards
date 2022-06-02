import React from 'react';
import ProfileForm from '../components/ProfileForm';
import { updateProfile, fetchSignedUrl } from '../services/profile';
import { useEffect } from 'react';

import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-hot-toast';
import Upload from '../components/Upload';
import { useProfileContext } from '../context/ProfileContext';
import styles from './CreateCard.css';

export default function ProfileEdit() {
  const {
    firstName,
    lastName,
    username,
    bio,
    avatarUrl,
    setAvatarUrl,
    setImageUrl,
    imageUrl,
  } = useProfileContext();
  const { user } = useUser();
  const history = useHistory();

  const submitProfileHandler = async (e) => {
    ('profile edit button pushed');
    e.preventDefault;

    const updates = {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      username: username,
      bio: bio,
      image: imageUrl,
    };
    await updateProfile(updates);
    history.replace('/profile');
    toast.success('You have successfully updated your profile!');
  };

  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetchSignedUrl(avatarUrl);
      setImageUrl(data.signedURL);
    };
    fetchUrl();
  }, [avatarUrl, setImageUrl]);

  return (
    <div className={styles.create}>
      <h2>Edit your profile</h2>
      <div className={styles.form}>
        <ProfileForm submitProfileHandler={submitProfileHandler} />

        <Upload
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
          }}
        />
      </div>
    </div>
  );
}
