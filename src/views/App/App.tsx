import { useState } from 'react';
import { FiltersAttr } from './types';
import Header from '@components/header/header';
import Main from '@components/main/main';
import Spin from '@components/spin/spin';
import { InputsForms } from '@components/header/types';
import { IputsFromsMain } from '@components/main/types';
import { useComics } from '@services/comics';

const App = ():React.ReactElement => {
  const [filters, setFilters] = useState<FiltersAttr>({
    search: '',
    limit: 10,
    orderBy: '',
    offset: 0,
  })
  const { data, status } = useComics(
    filters.search, filters.limit, filters.orderBy, filters.offset,
  );
  const onSubmit = (insert: InputsForms) => {
    setFilters({...filters, search: insert.search });
  }
  const onChange = (change: IputsFromsMain) => {
    setFilters({...filters, orderBy: change.orderBy })
  }
  return (
    <div
      className="max-w-7xl mx-auto bg-gray-100"
    >
      <Header
        submit={onSubmit}
      />
      {
        status === "loading" &&
          <Spin />
      }
      {
        status === "success" && data !== undefined &&
          <Main
            Comics={data}
            onChangeOrder={onChange}
            filters={filters}
          />
      }
      {
        status === "error" &&
          <h1>Ha ocurrido un error</h1>
      }
    </div>
  );
}

export default App;
