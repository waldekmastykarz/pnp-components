export class SPHttpClient {
  fetch: (url: string, configuration: any, options: any) => Promise<SPHttpClientResponse>;
  get: (url: string, configuration: any, options?: any) =>  Promise<SPHttpClientResponse>;
  post: (url: string, configuration: any, options: any) => Promise<SPHttpClientResponse>;
}

export class SPHttpClientResponse {
  json: () => Promise<any>;
  readonly ok: boolean;
}