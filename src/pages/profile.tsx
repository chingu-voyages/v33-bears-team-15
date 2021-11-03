import { useState } from 'react';

import Layout from '~/components/layouts/default';
import Container from '~/components/ui/container';
import Avatar from '~/components/ui/avatar';
import Carousel from '~/components/profile/carousel';
import useAuth from '~/hooks/use-auth';
import booksByCategories from '~data/books';
import Popup from '~/components/profile/editForm-popup';

import books from '~/hooks/use-book';

export default function Profile() {
  const mockData = booksByCategories.map((c) => c.data);
  const userData = useAuth().currentUser;
  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = () => {
    setShowPopup(!showPopup);
  };

  // Todo!: Eliminate mock data
  return (
    <Layout headerProps={{ withBorder: true, variant: 'solid', sticky: true }}>
      <Container>
        <div className="mt-4 flex">
          <Avatar
            src={
              userData?.avatar ||
              'https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg'
            }
            title="test"
            className="flex-initial"
          />
          <div className="flex-initial ml-24">
            {userData?.role ? (
              <h1>
                About me - <span className="bg-gray-300 text-black">{userData.role}</span>
              </h1>
            ) : (
              <h1>About me</h1>
            )}
            <p>{userData?.biography || 'I like books!'}</p>
          </div>
        </div>
        <Carousel title="Reading list" data={mockData[0]} />
        {/* Todo?: Add published books to user entity */}
        <Carousel title="Published books" data={mockData[1]} />
      </Container>
      <div className={showPopup ? 'visible' : 'invisible'}>
        <Popup user={userData} hidePopup={hidePopup} />
      </div>
    </Layout>
  );
}