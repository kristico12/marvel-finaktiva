import { UseQueryResult, useQuery } from 'react-query';
import { publicKey, hash } from '@utils/constants';
import { publicRequest } from '@utils/public-request';
import { ComicsAttr } from './types/types';

const ACTIVITIES_ENPOINT = `/v1/public/comics?ts=1000&apikey=${publicKey}&hash=${hash}`;
const COMICS_KEY = "comics";

const useComics = (): UseQueryResult<ComicsAttr> => {
  const queryResult = useQuery(
    COMICS_KEY,
    async () => {
      const response = await publicRequest.get<ComicsAttr>(ACTIVITIES_ENPOINT);
      return response.data;
    });
  return queryResult;
};

export { useComics };
export type { ComicsAttr };
