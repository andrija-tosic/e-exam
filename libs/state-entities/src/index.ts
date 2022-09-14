import {
  PlaylistDto,
  Release,
  User,
  Artist,
  UserCompatibilityDto,
} from '@music-match/entities';

export type ReleaseEntity = Pick<
  Release,
  'id' | 'imageUrl' | 'name' | 'releaseDate' | 'type' | 'genres'
> & {
  artistIds: number[];
  trackIds: number[];
};

export type UserEntity = User & {
  likedPlaylistsIds: number[];
  playlistsIds: number[];
  friendsIds: number[];
};

export class SearchEntity {
  query: string = '';
  artistIds: number[] = [];
  releaseIds: number[] = [];
  trackIds: number[] = [];
  userIds: number[] = [];
  playlistIds: number[] = [];
}

export type PlaylistEntity = Pick<
  PlaylistDto,
  'id' | 'description' | 'imageUrl' | 'liked' | 'name'
> & {
  ownerIds: number[];
  trackIds: number[];
};

export type UsersCompatibilityEntity = Pick<
  UserCompatibilityDto,
  'withUserId'
> & {
  artistResults: {
    artistId: number;
    occurences: number;
  }[];

  genreResults: {
    genre: string;
    occurences: number;
  }[];
};
