import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

const Pagination = (props: ReactPaginateProps): React.ReactElement => (
  <div id='react-paginate'>
    <ReactPaginate
      {
        ...props
      }
    />
  </div>
);

export default Pagination;
