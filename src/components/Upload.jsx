import { useEffect } from 'react';
import { client } from '../services/client';
import { useProfileContext } from '../context/ProfileContext';
import { useState } from 'react';

export default function Upload({ url, onUpload }) {
  const { avatarUrl, setAvatarUrl } = useProfileContext();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await client.storage
        .from('profilebucket')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      'Error downloading image: ', error.message;
    }
  };

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await client.storage
        .from('profilebucket')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {avatarUrl && (
        <img
          src={avatarUrl ? avatarUrl : `https://place-hold.it`}
          alt={avatarUrl ? 'image' : 'No image'}
          className="avatar image"
          style={{ height: '150px' }}
        />
      )}
      {uploading ? (
        'Uploading...'
      ) : (
        <form>
          {!avatarUrl && <input type="file" onChange={uploadAvatar} />}
        </form>
      )}
    </div>
  );
}
