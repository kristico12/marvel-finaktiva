import { useState } from 'react';
import { FiltersAttr } from './types';
import Header from '@components/header/header';
import Main from '@components/main/main';
import Spin from '@components/spin/spin';
import { InputsForms } from '@components/header/types';
import { IputsFromsMain } from '@components/main/types';
import { useComics } from '@services/comics';
import Pagination from '@components/pagination/pagination';

const App = (): React.ReactElement => {
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
    setFilters({ ...filters, search: insert.search, offset: 0 });
  }
  const onChange = (change: IputsFromsMain) => {
    setFilters({ ...filters, orderBy: change.orderBy })
  }
  const onChangePage = (selectedItem: { selected: number; }) => {
    setFilters({ ...filters, offset: selectedItem.selected * filters.limit });
  }
  return (
    <div
      className='max-w-7xl mx-auto bg-gray-100'
    >
      <Header
        submit={onSubmit}
      />
      {
        status === 'loading' &&
        <Spin />
      }
      {
        status === 'success' && data !== undefined &&
        (
          <>
            <Main
              Comics={data}
              onChangeOrder={onChange}
              filters={filters}
              onChangePage={onChangePage}
            />
            <div
              className='grid grid-cols-12'
            >
              <div
                className='p-2 flex justify-center col-span-12 tablet:col-span-9'
              >
                <Pagination
                  previousLabel={'<'}
                  nextLabel={'>'}
                  pageCount={Math.ceil(data.data.total / data.data.limit)}
                  marginPagesDisplayed={0}
                  pageRangeDisplayed={5}
                  onPageChange={onChangePage}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  initialPage={Math.ceil(data.data.offset / data.data.limit)}
                />
              </div>
            </div>
          </>

        )
      }
      {
        status === 'error' &&
        <h1>Ha ocurrido un error</h1>
      }
    </div>
  );
}

export default App;
