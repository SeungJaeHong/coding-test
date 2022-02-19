import {
  createAxiosClient,
  createHttpHeaders,
  acceptApplicationJson,
} from '../common/networks';

const createBaseHeader = () => createHttpHeaders()(acceptApplicationJson);

export const publicApi = createAxiosClient(
  'http://localhost:3000',
  createBaseHeader
);
