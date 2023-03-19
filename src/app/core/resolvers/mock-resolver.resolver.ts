import { ResolveFn } from '@angular/router';

export const mockResolverResolver: ResolveFn<unknown> = (_route, _state) => {
  return {
    someDummyData: 'just for example',
    anotherDummyData: 'you can create HTTP request here',
  };
};
