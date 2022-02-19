import axios, {
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  Method,
} from 'axios';
import { AxiosFileUploadStateArgs, FileUploadStateArgs } from './network.type';

export const axiosResponseToData = <T>(response: AxiosResponse<T>) =>
  response.data;

export const axiosErrorResToData =
  (errorHandler?: (err: AxiosError) => Promise<void>) => (err: AxiosError) => {
    const error = err as any;
    if (errorHandler) {
      errorHandler(error);
    }
    throw error;
  };

export const createAxiosHeader = (headerProvider: () => AxiosRequestHeaders) =>
  headerProvider();

export const axiosFileUploadCommon =
  (
    baseUrl: string,
    headerProvider: () => Record<string, string>,
    withCredentials = false,
    interrupt?: (error: any) => Promise<void>
  ) =>
  <T>(
    method: Method,
    url: string,
    data: FormData,
    progCallback?: (args: FileUploadStateArgs) => void,
    timeout?: number
  ) => {
    try {
      const headers = createAxiosHeader(headerProvider);

      return axios(baseUrl + url, {
        data,
        headers,
        method,
        onUploadProgress: ({ loaded, total }: AxiosFileUploadStateArgs) => {
          const args = {
            completed: loaded >= total,
            loaded,
            progress: Math.floor((loaded * 1000) / total) / 10,
            total,
          };

          if (progCallback) {
            progCallback(args);
          }
        },
        withCredentials,
        timeout,
      })
        .then<T>(axiosResponseToData)
        .catch(axiosErrorResToData(interrupt));
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const convertToFormData = (
  data: Record<string, string | File | File[]>
) => {
  const formData = new FormData();
  const keys = Object.keys(data);
  let key = '';

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];

    if (!Object.prototype.hasOwnProperty.call(data, key)) {
      continue;
    }
    const value = data[key];

    if (Array.isArray(value)) {
      const len = value.length;
      for (let idx = 0; idx < len; idx++) {
        const file: File = value[idx];
        formData.append(key, file, file.name);
      }
    } else {
      formData.set(key, value);
    }
  }

  return formData;
};
