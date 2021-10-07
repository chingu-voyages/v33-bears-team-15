import { useEffect } from 'react';
import Layout from '~/components/layout';
import Carousel from '~/components/library/carousel';
import Slider from '~/components/library/slider';
import Container from '~/components/ui/container';
import booksByCategories from '~data/books';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  storeuserrole,
  selectUserid,
  storeuserdata,
  selectUserRole,
  selectUserData,
} from '../redux/userSlice';
import { getUserData } from '../services/axiosAPI';

export default function Library() {
  const dispatch = useAppDispatch();
  const currentUserid = useAppSelector(selectUserid);
  const currentUserRole = useAppSelector(selectUserRole);
  const currentUserData = useAppSelector(selectUserData);
  console.log(currentUserid);

  useEffect(() => {
    (async function userDataGetter() {
      const userData = await getUserData(currentUserid);
      console.log(userData);
      dispatch(storeuserdata(userData.data));
    })();
  }, [currentUserData]);

  console.log(currentUserData);

  return (
    <Layout
      headerProps={{ withBorder: true, variant: 'solid', sticky: true }}
      customMeta={{ title: 'Library | Dekoo' }}
    >
      <Slider />
      <Container>
        {booksByCategories.map((c) => (
          <Carousel key={c.category} title={c.category} data={c.data} moreHref={c.link} />
        ))}
      </Container>
    </Layout>
  );
}
