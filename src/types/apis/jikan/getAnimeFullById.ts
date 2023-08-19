import { Infer, number, object } from 'superstruct'
import { S_Anime } from './structs'

export const S_GetAnimeFullByIdRequest = object({
  id: number(),
})

export const S_GetAnimeFullByIdResponse = object({
  data: S_Anime,
})

export type GetAnimeFullByIdRequest = Infer<typeof S_GetAnimeFullByIdRequest>
export type GetAnimeFullByIdResponse = Infer<typeof S_GetAnimeFullByIdResponse>
