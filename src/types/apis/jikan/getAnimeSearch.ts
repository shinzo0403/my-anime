import { object, array, Describe, Infer, optional, boolean, number, string } from 'superstruct'
import { S_Pagination, S_Anime, S_OrderBy, S_Sort, S_Type, S_Date, S_Status } from './structs'
import { Date, OrderBy, Sort, Status, Type } from './common'

export const S_GetAnimeSearchRequest = object({
  stw: optional(boolean()),
  unapproved: optional(boolean()),
  page: number(),
  limit: number(),
  q: optional(string()),
  type: optional(S_Type),
  score: optional(number()),
  min_score: optional(number()),
  max_score: optional(number()),
  status: optional(S_Status),
  sfw: optional(boolean()),
  genres_exclude: optional(array(number())),
  order_by: optional(S_OrderBy),
  sort: optional(S_Sort),
  letter: optional(string()),
  producers: optional(array(number())),
  start_date: optional(S_Date),
  end_date: optional(S_Date),
})

export const S_GetAnimeSearchResponse = object({
  data: array(S_Anime),
  pagination: S_Pagination,
})

export type GetAnimeSearchRequest = Infer<typeof S_GetAnimeSearchRequest>
export type GetAnimeSearchResponse = Infer<typeof S_GetAnimeSearchResponse>
