type ComicSerieStorieAttr = {
  available: number;
  returned: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: string;
  }[]
};
type ResultAttr = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  commics: ComicSerieStorieAttr;
  series: ComicSerieStorieAttr;
  stories: ComicSerieStorieAttr;
  events: ComicSerieStorieAttr;
}
type DataAttr = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResultAttr;
};
type ComicsAttr = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataAttr;
};

export type { ComicsAttr };