import { GifInterface } from "./GifInterface";

export interface HistoryInterface {
  key: string,
  search: {
    path: string,
    result: GifInterface[]
  }[]
}
