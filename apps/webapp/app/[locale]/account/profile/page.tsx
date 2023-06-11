import { Metadata } from 'next';
import { ProfileViewPage } from '../../../../src/components/account/profile';

export const metadata: Metadata = {
  title: 'Profile',
};
function ProfilePage() {
  return <ProfileViewPage />;
}

export default ProfilePage;
