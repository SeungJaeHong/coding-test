import axios from 'axios';
import { AnyRecord, SerializableType, StringRecord } from '../types';
import {
  axiosErrorResToData,
  axiosFileUploadCommon,
  axiosResponseToData,
  convertToFormData,
  createAxiosHeader,
} from './network.parser';
import { AxiosHttpClient, FileUploadStateArgs } from './network.type';

export const createAxiosClient = (
  baseUrl: string,
  headerProvider: () => StringRecord = () => ({}),
  withCredentials = false,
  errorHandler?: (error: any) => Promise<void>
): AxiosHttpClient => {
  const axiosUploadCommon = axiosFileUploadCommon(
    baseUrl,
    headerProvider,
    withCredentials,
    errorHandler
  );
  const axiosCatchCommon = axiosErrorResToData(errorHandler);

  return {
    get<T = SerializableType, D = AnyRecord | void>(
      uri: string,
      params?: D,
      timeout?: number
    ): Promise<T> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .get<T>(baseUrl + uri, {
            headers,
            params,
            withCredentials,
            timeout,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    post<T>(uri: string, data: any = null, timeout?: number): Promise<T> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .post<T>(baseUrl + uri, data, {
            headers,
            withCredentials,
            timeout,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    put<T>(uri: string, data: any = null, timeout?: number): Promise<T> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .post<T>(baseUrl + uri, data, {
            headers,
            withCredentials,
            timeout,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    patch<T>(uri: string, data: any = null, timeout?: number): Promise<T> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .post<T>(baseUrl + uri, data, {
            headers,
            withCredentials,
            timeout,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    delete<T, D>(uri: string, params?: D, timeout?: number): Promise<T> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .delete<T>(baseUrl + uri, {
            headers,
            params,
            withCredentials,
            timeout,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    getFile<D = AnyRecord | void>(
      url: string,
      params?: D,
      filename?: string
    ): Promise<File> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .get<Blob>(baseUrl + url, {
            headers,
            params,
            responseType: 'blob',
            withCredentials,
          })
          .then(axiosResponseToData)
          .then((blob) => new File([blob], filename || ''))
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    getBlob<D = AnyRecord | void>(url: string, params?: D): Promise<Blob> {
      try {
        const headers = createAxiosHeader(headerProvider);

        return axios
          .get<Blob>(baseUrl + url, {
            headers,
            params,
            responseType: 'blob',
            withCredentials,
          })
          .then(axiosResponseToData)
          .catch(axiosCatchCommon);
      } catch (error) {
        return Promise.reject(error).catch(axiosCatchCommon);
      }
    },

    postUpload<
      T = void,
      D extends AnyRecord = Record<string, string | File | File[]>
    >(
      url: string,
      data: D,
      progressCallback?: (args: FileUploadStateArgs) => void,
      timeout?: number
    ): Promise<T> {
      return axiosUploadCommon(
        'post',
        url,
        convertToFormData(data),
        progressCallback,
        timeout
      );
    },
  };
};
