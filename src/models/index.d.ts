import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPost = {
  readonly id: string;
  readonly title?: string | null;
  readonly comment?: string | null;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly title?: string | null;
  readonly comment?: string | null;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerBlog = {
  readonly id: string;
  readonly name?: string | null;
  readonly Posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly id: string;
  readonly name?: string | null;
  readonly Posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog, BlogMetaData>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}