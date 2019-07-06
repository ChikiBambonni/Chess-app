import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { FRIENDS_LIST_DATA } from './friends-list.constants';
import { FriendsListItem } from './friends-list.interfaces';

export class FriendsListMocks extends MockBackendFactory<FriendsListItem> {
  items: FriendsListItem[] = FRIENDS_LIST_DATA;

  constructor () {
    super();
  }

  getData(): FriendsListItem[] {
    return this.items;
  }
}
