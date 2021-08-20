import Header from '@components/header/header';
import { useComics } from '@services/comics';

const App = ():React.ReactElement => {
  const { data } = useComics();
  console.log(data);
  return (
    <div
      className="max-w-7xl mx-auto bg-gray-400"
    >
      <Header />
    </div>
  );
}

export default App;
