import { GIFInterfacesAPI, Datum } from './Gif.InterfacesApi';
import { GifInterface } from './GifInterface';

export class mapperApiData {
  giftApiToGifInterface = (item: Datum): GifInterface=>{
    return {
      id: item.id,
      url: item.images.original.url,
      title: item.title,
      width: item.images.original.width,
      height: item.images.original.height
    }
  }

  gifsApiArrayToGif = (items: GIFInterfacesAPI):GifInterface[]=>{
    return items.data.map(this.giftApiToGifInterface);
  }
}
