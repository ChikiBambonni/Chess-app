export type Status = 'online' | 'offline';

export interface FriendsListItem {
  status: Status;
  label: string;
}
