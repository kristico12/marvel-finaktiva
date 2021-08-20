import { useState } from 'react';
import { FiltersAttr } from './types';
import Header from '@components/header/header';
import Spin from '@components/spin/spin';
import { InputsForms } from '@components/header/types';
import { useComics } from '@services/comics';

const App = ():React.ReactElement => {
  const [filters, setFilters] = useState<FiltersAttr>({
    search: '',
    limit: 10,
  })
  const { data, status } = useComics(
    filters.search, filters.limit
  );
  const onSubmit = (insert: InputsForms) => {
    setFilters({...filters, search: insert.search })
  }
  console.log(data);
  return (
    <div
      className="max-w-7xl mx-auto bg-gray-400"
    >
      <Header
        submit={onSubmit}
      />
      {
        status === "loading" &&
          <Spin />
      }
      {
        status === "success" &&
          <h1>ha cargfado</h1>
      }
      {
        status === "error" &&
          <h1>Ha ocurrido un error</h1>
      }
    </div>
  );
}

export default App;
