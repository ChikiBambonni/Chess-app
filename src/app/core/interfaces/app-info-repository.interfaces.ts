import { Observable } from 'rxjs';

export type InfoRepositoryResponse<Type>  = Observable<Type>;

export interface InfoRepository {
  getFIDETableList(params?: object): Observable<any>;
  getAppTableList(params?: object): Observable<any>;
  getFriendsList(params?: object): Observable<any>;
  getOpeningsList(params?: object): Observable<any>;
}
