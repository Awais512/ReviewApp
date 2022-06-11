import { useTheme } from '../hooks';

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return <div>Home</div>;
};

export default Home;
