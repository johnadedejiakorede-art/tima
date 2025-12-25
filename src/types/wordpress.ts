// WordPress content types

export interface WordPressTestimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface WordPressPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  date: string;
  author: {
    name: string;
    avatar: string | null;
  };
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  seo?: {
    title: string;
    description: string;
  };
}

export interface WordPressCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// GraphQL response types
export interface TestimonialsResponse {
  testimonials: {
    nodes: {
      id: string;
      testimonialFields: {
        quote: string;
        author: string;
        location: string;
        rating: number;
      };
    }[];
  };
}

export interface PostsResponse {
  posts: {
    nodes: {
      id: string;
      slug: string;
      title: string;
      excerpt: string;
      content: string;
      date: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        } | null;
      } | null;
      author: {
        node: {
          name: string;
          avatar: {
            url: string;
          } | null;
        };
      };
      categories: {
        nodes: {
          id: string;
          name: string;
          slug: string;
        }[];
      };
      tags: {
        nodes: {
          id: string;
          name: string;
          slug: string;
        }[];
      };
      seo?: {
        title: string;
        metaDesc: string;
      };
    }[];
  };
}

export interface CategoriesResponse {
  categories: {
    nodes: {
      id: string;
      name: string;
      slug: string;
      count: number;
    }[];
  };
}
