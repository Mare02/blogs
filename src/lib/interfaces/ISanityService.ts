export default interface ISanityService {
  getAllPosts(): Promise<any>,
  getSinglePost(slug: string): Promise<any>,
  getAllTopics(): Promise<any>,
  getSingleTopic(slug: string): Promise<any>,
  getPostsByTopic(slug: string): Promise<any>,
}