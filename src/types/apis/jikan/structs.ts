import {
  array,
  boolean,
  date,
  define,
  literal,
  number,
  object,
  optional,
  string,
} from 'superstruct'

export const S_Type = literal(['tv', 'ova', 'movie', 'special', 'ona', 'music'])

export const S_Status = literal(['airing', 'complete', 'upcoming'])

export const S_Rating = literal(['g', 'pg', 'pg13', 'r17', 'r', 'rx'])

export const S_OrderBy = literal([
  'mal_id',
  'title',
  'start_date',
  'end_date',
  'score',
  'scored_by',
  'rank',
  'members',
  'id',
  'episodes',
  'popularity',
  'favorites',
])

export const S_Sort = literal(['asc', 'desc'])

const isDatePattern = (value: unknown): boolean => {
  if (typeof value !== 'string') return false
  const regex = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/
  return regex.test(value)
}

export const S_Date = define<string>('StartDate', isDatePattern)

export const S_Image = object({
  image_url: string(),
  small_image_url: optional(string()),
  medium_image_url: optional(string()),
  large_image_url: optional(string()),
  maximum_image_url: optional(string()),
})

export const S_Trailer = object({
  youtube_id: string(),
  url: string(),
  embed_url: string(),
  images: S_Image,
})

export const S_Title = object({
  type: string(),
  title: string(),
})

export const S_AiredDate = object({
  day: number(),
  month: number(),
  year: number(),
})

export const S_Aired = object({
  from: string(),
  to: string(),
  prop: object({
    from: S_AiredDate,
    to: S_AiredDate,
    string: string(),
  }),
})

export const S_Broadcast = object({
  day: string(),
  time: string(),
  timezone: string(),
  string: string(),
})

export const S_Entity = object({
  mal_id: number(),
  type: string(),
  name: string(),
  url: string(),
})

export const S_Pagination = object({
  last_visible_page: number(),
  has_next_page: boolean(),
  items: object({
    count: number(),
    total: number(),
    per_page: number(),
  }),
})

export const S_Anime = object({
  mal_id: number(),
  url: string(),
  images: object({
    jpg: S_Image,
    webp: S_Image,
  }),
  trailer: S_Trailer,
  approved: boolean(),
  titles: array(S_Title),
  title: string(),
  title_english: string(),
  title_japanese: string(),
  title_synonyms: array(string()),
  type: string(),
  source: string(),
  episodes: number(),
  status: string(),
  airing: boolean(),
  aired: optional(S_Aired),
  duration: string(),
  rating: string(),
  score: number(),
  scored_by: number(),
  rank: number(),
  popularity: number(),
  members: number(),
  favorites: number(),
  synopsis: string(),
  background: string(),
  season: string(),
  year: number(),
  broadcast: S_Broadcast,
  producers: optional(array(S_Entity)),
  licensors: optional(array(S_Entity)),
  studios: optional(array(S_Entity)),
  genres: optional(array(S_Entity)),
  explicit_genres: optional(array(S_Entity)),
  themes: optional(array(S_Entity)),
  demographics: optional(array(S_Entity)),
})
