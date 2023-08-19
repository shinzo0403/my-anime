import { Infer } from 'superstruct'
import {
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

export type Type = Infer<typeof S_Type>
export type Status = Infer<typeof S_Status>
export type Rating = Infer<typeof S_Rating>
export type OrderBy = Infer<typeof S_OrderBy>
export type Sort = Infer<typeof S_Sort>
export type Date = Infer<typeof S_Date>
export type Image = Infer<typeof S_Image>
export type Trailer = Infer<typeof S_Trailer>
export type Title = Infer<typeof S_Title>
export type AiredDate = Infer<typeof S_AiredDate>
export type Aired = Infer<typeof S_Aired>
export type Broadcast = Infer<typeof S_Broadcast>
export type Entity = Infer<typeof S_Entity>
export type Pagination = Infer<typeof S_Pagination>
export type Anime = Infer<typeof S_Anime>
