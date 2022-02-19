import { AnyRecord, SerializableType, StringRecord } from '../types';

/**
 * file upload state
 */
export interface FileUploadStateArgs {
  /**
   * progress percentage
   * 0 ~ 100
   */
  progress: number;
  /**
   * uploaded bytes
   */
  loaded: number;
  /**
   * total bytes for uploading
   */
  total: number;
  /**
   * complete status
   */
  completed: boolean;
}

/**
 * file upload status via axios
 */
export interface AxiosFileUploadStateArgs {
  /**
   * uploaded bytes
   */
  loaded: number;
  /**
   * total bytes for uploading
   */
  total: number;
}

export interface AxiosHttpClient {
  get<T = SerializableType, D = StringRecord | void>(
    uri: string,
    params?: D,
    timeout?: number
  ): Promise<T>;

  post<T = SerializableType, D = StringRecord | void>(
    uri: string,
    body?: D,
    timeout?: number
  ): Promise<T>;

  put<T = SerializableType, D = StringRecord | void>(
    uri: string,
    body?: D,
    timeout?: number
  ): Promise<T>;

  patch<T = SerializableType, D = StringRecord | void>(
    uri: string,
    body?: D,
    timeout?: number
  ): Promise<T>;

  delete<T = SerializableType, D = StringRecord | void>(
    uri: string,
    params?: D,
    timeout?: number
  ): Promise<T>;

  postUpload<
    T = void,
    D extends AnyRecord = Record<string, string | File | File[]>
  >(
    uri: string,
    data: D,
    progressCallback?: (args: FileUploadStateArgs) => void,
    timeout?: number
  ): Promise<T>;

  getFile<D = StringRecord | void>(
    uri: string,
    params?: D,
    filename?: string
  ): Promise<File>;

  getBlob<D = StringRecord | void>(uri: string, params?: D): Promise<Blob>;
}
