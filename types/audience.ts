export interface HotLiveEventsListItem {
  name: string;
  slug: string;
  time: string;
  location: string;
  id: string | number;
  timePassed?: string;
  imageSrc?: string;
}

export interface PopularHostsListItem {
  id: number;
  name: string;
  email: string;
  profile_picture: string;
  bio: string;
  slug: string;
  profession: string;
  gender: string;
  country: string;
  followers: number;
  events: number;
  is_following: boolean;
}
