import useRedux from '@/hooks/useRedux';
import Welcome from '../authpages/welcome';
import Home from '../userpages/home';

export default function Setup() {
  const { userData } = useRedux();
  return userData.status === 'main' ? <Welcome /> : <Home />;
}
