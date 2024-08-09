import type {
  Blogs,
  FetchError,
  ResponseApi,
  ResponseApiPost,
} from "~/types/blog.types";
import { errorCallApi } from "./errorCall";
import type { NitroFetchRequest, $Fetch } from "nitropack";

/* @desc Get all blogs
   @param {number} page - Page number
   @return {Promise<ResponseApi<Blogs[]> | FetchError>} - Promise that resolves to either a ResponseApi<Blogs[]> object or a FetchError object
*/
export const getBlogsAll = async (page: number = 1): Promise<any> => {
  const runtimeConfig = useRuntimeConfig();
  const response: any = await $fetch(
    `${runtimeConfig.public.baseUrlApi}/blogs/`,
    {
      query: {
        page: page,
      },
    },
  );
  const data = await response.json();
  return data;
};

export const createBlog = async (
  createBlogDto: Blogs,
): Promise<ResponseApiPost | FetchError> => {
  const runtimeConfig = useRuntimeConfig();
  try {
    const formData = new FormData();
    formData.append("title", createBlogDto.title);
    formData.append("description", createBlogDto.description);
    if (createBlogDto.file instanceof File) {
      formData.append("file", createBlogDto.file);
    }
    createBlogDto.hashtags.forEach((tag: string) => {
      formData.append("hashtags", tag);
    });
    const res = await $fetch<ResponseApiPost>(
      `${runtimeConfig.public.baseUrlApi}/blogs/`,
      {
        method: "POST",
        body: formData,
      },
    );
    return res;
  } catch (err) {
    return errorCallApi(err);
  }
};

export const updateBlog = async (
  updateBlogDto: Blogs,
  id: string,
): Promise<ResponseApiPost | FetchError> => {
  try {
    const res = await $fetch<ResponseApiPost>(
      `${process.env.BASE_UTL_API}/blogs/${id}`,
      {
        method: "PATCH",
        body: updateBlogDto,
      },
    );
    return res;
  } catch (err) {
    return errorCallApi(err);
  }
};
