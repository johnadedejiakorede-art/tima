import type {
  WordPressTestimonial,
  WordPressPost,
  WordPressCategory,
  TestimonialsResponse,
  PostsResponse,
  CategoriesResponse,
} from "@/types/wordpress";

// Configure your WordPress GraphQL endpoint here
// After installing WPGraphQL plugin, your endpoint will be: https://your-wordpress-site.com/graphql
const WORDPRESS_API_URL = import.meta.env.VITE_WORDPRESS_API_URL || "";

async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!WORDPRESS_API_URL) {
    throw new Error("WordPress API URL not configured. Please set VITE_WORDPRESS_API_URL environment variable.");
  }

  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data;
}

// Testimonials queries
const GET_TESTIMONIALS = `
  query GetTestimonials {
    testimonials(first: 10) {
      nodes {
        id
        testimonialFields {
          quote
          author
          location
          rating
        }
      }
    }
  }
`;

export async function getTestimonials(): Promise<WordPressTestimonial[]> {
  const data = await fetchGraphQL<TestimonialsResponse>(GET_TESTIMONIALS);
  
  return data.testimonials.nodes.map((node) => ({
    id: node.id,
    quote: node.testimonialFields.quote,
    author: node.testimonialFields.author,
    location: node.testimonialFields.location,
    rating: node.testimonialFields.rating,
  }));
}

// Blog posts queries
const GET_POSTS = `
  query GetPosts($first: Int, $after: String, $categorySlug: String) {
    posts(first: $first, after: $after, where: { categoryName: $categorySlug }) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      seo {
        title
        metaDesc
      }
    }
  }
`;

const GET_CATEGORIES = `
  query GetCategories {
    categories(first: 50) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export async function getPosts(
  limit: number = 10,
  categorySlug?: string
): Promise<WordPressPost[]> {
  const data = await fetchGraphQL<PostsResponse>(GET_POSTS, {
    first: limit,
    categorySlug: categorySlug || null,
  });

  return data.posts.nodes.map((node) => ({
    id: node.id,
    slug: node.slug,
    title: node.title,
    excerpt: node.excerpt,
    content: "",
    date: node.date,
    featuredImage: node.featuredImage?.node?.sourceUrl || null,
    author: {
      name: node.author.node.name,
      avatar: node.author.node.avatar?.url || null,
    },
    categories: node.categories.nodes,
    tags: node.tags.nodes,
  }));
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const data = await fetchGraphQL<{ post: PostsResponse["posts"]["nodes"][0] | null }>(
    GET_POST_BY_SLUG,
    { slug }
  );

  if (!data.post) return null;

  const node = data.post;
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    excerpt: node.excerpt,
    content: node.content,
    date: node.date,
    featuredImage: node.featuredImage?.node?.sourceUrl || null,
    author: {
      name: node.author.node.name,
      avatar: node.author.node.avatar?.url || null,
    },
    categories: node.categories.nodes,
    tags: node.tags.nodes,
    seo: node.seo
      ? {
          title: node.seo.title,
          description: node.seo.metaDesc,
        }
      : undefined,
  };
}

export async function getCategories(): Promise<WordPressCategory[]> {
  const data = await fetchGraphQL<CategoriesResponse>(GET_CATEGORIES);
  
  return data.categories.nodes.filter((cat) => cat.count > 0);
}
