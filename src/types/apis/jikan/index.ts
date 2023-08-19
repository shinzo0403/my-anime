export {
  S_Image,
  S_Aired,
  S_AiredDate,
  S_Anime,
  S_Broadcast,
  S_Entity,
  S_Pagination,
  S_Title,
  S_Trailer,
  S_Type,
  S_Status,
  S_Rating,
  S_OrderBy,
  S_Sort,
  S_Date,
} from './structs'
export type {
  Type,
  Status,
  Rating,
  OrderBy,
  Sort,
  Date,
  Image,
  Trailer,
  Title,
  AiredDate,
  Aired,
  Broadcast,
  Entity,
  Pagination,
  Anime,
} from './common'

export { S_GetAnimeSearchRequest, S_GetAnimeSearchResponse } from './getAnimeSearch'
export type { GetAnimeSearchRequest, GetAnimeSearchResponse } from './getAnimeSearch'

export { S_GetAnimeFullByIdRequest, S_GetAnimeFullByIdResponse } from './getAnimeFullById'
export type { GetAnimeFullByIdRequest, GetAnimeFullByIdResponse } from './getAnimeFullById'
