import { UseQueryResult, useQuery } from 'react-query';
import { publicKey, hash } from '@utils/constantsEnv';
import { publicRequest } from '@utils/public-request';
import { ComicsAttr } from './types/types';

const ACTIVITIES_ENPOINT = `/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=1000`;
const COMICS_KEY = "comics";

const useComics = (
  search: string,
  limit: number,
  orderBy: 'name' | 'modified' | '' | '-name' | '-modified',
  offset: number,
): UseQueryResult<ComicsAttr> => {
  const queryResult = useQuery(
    [COMICS_KEY, search, limit, orderBy, offset],
    async () => {
      let conditionalEnpoint = `${ACTIVITIES_ENPOINT}&limit=${limit}`;
      if (search.length > 0) conditionalEnpoint = `${conditionalEnpoint}&nameStartsWith=${encodeURI(search)}`;
      if (orderBy.length > 0) conditionalEnpoint = `${conditionalEnpoint}&orderBy=${orderBy}`;
      conditionalEnpoint = `${conditionalEnpoint}&offset=${offset}`;
      const response = await publicRequest.get<ComicsAttr>(conditionalEnpoint);
      return response.data;
    },
  );
  return queryResult;
};

export { useComics };
export type { ComicsAttr };
