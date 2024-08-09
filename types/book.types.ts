export type Category ={
    id: string;
    name: string;
    slug: string;
  }
  export type ResApiListManga = {
    status: string | boolean;
    data?: {
      items:Manga[]
    } ;
    message?: string;
  }
  export type DataRes = {
    seoOnPage:any;
    items: Manga[];
    params?:ResParams
  }
  export type ResParams = {
    type_slug:string,
    filterCategory?:string[],
    sortField:string,
    itemsUpdateInDay:number,
    pagination:ResPagination
  }
  export type ResPagination = {
    totalItems:number,
    totalItemsPerPage:number,
    currentPage:number,
    pageRanges:number
  }
  export type Chapter ={
    filename: string;
    chapter_name: string;
    chapter_title: string;
    chapter_api_data: string;
  }
  export type Manga ={
    _id: string;
    name: string;
    slug: string;
    origin_name: string[];
    status: string;
    thumb_url: string;
    sub_docquyen: boolean;
    category: Category[];
    updatedAt: string;
    chaptersLatest: Chapter[];
  }