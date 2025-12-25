import { useQuery } from "@tanstack/react-query";
import {
  getTestimonials,
  getPosts,
  getPostBySlug,
  getCategories,
} from "@/services/wordpress";

// Check if WordPress is configured
const isWordPressConfigured = !!import.meta.env.VITE_WORDPRESS_API_URL;

// Fallback testimonials data (used when WordPress is not configured)
const fallbackTestimonials = [
  {
    id: "1",
    quote: "Our educator feels like family. My child is excited every morning and comes home happy every day.",
    author: "Sarah M.",
    location: "Calgary Parent",
    rating: 5,
  },
  {
    id: "2",
    quote: "The agency supports me so well. I never feel alone. The training has made me a better educator.",
    author: "Jennifer L.",
    location: "Cochrane Educator",
    rating: 5,
  },
  {
    id: "3",
    quote: "Finding quality childcare was stressful until we discovered Tima. Perfect for our toddler.",
    author: "Michael & Lisa R.",
    location: "Calgary Parents",
    rating: 5,
  },
];

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: isWordPressConfigured,
    placeholderData: fallbackTestimonials,
  });
}

export function usePosts(limit: number = 10, categorySlug?: string) {
  return useQuery({
    queryKey: ["posts", limit, categorySlug],
    queryFn: () => getPosts(limit, categorySlug),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: isWordPressConfigured,
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: isWordPressConfigured && !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: isWordPressConfigured,
  });
}

export { isWordPressConfigured };
