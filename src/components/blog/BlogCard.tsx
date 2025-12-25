import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { WordPressPost } from "@/types/wordpress";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: WordPressPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = format(new Date(post.date), "MMM d, yyyy");

  return (
    <article className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
      {/* Featured Image */}
      {post.featuredImage && (
        <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}

      <div className="p-6">
        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Badge key={category.id} variant="secondary" className="text-xs">
                {category.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <div
          className="text-muted-foreground text-sm mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
          >
            Read more
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
