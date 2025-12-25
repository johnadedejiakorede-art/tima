import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useWordPress";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogSidebarProps {
  currentCategory?: string;
}

const BlogSidebar = ({ currentCategory }: BlogSidebarProps) => {
  const { data: categories, isLoading } = useCategories();

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">
          Categories
        </h3>

        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        ) : categories && categories.length > 0 ? (
          <ul className="space-y-2">
            <li>
              <Link
                to="/blog"
                className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                  !currentCategory
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground/80"
                }`}
              >
                <span>All Posts</span>
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/blog?category=${category.slug}`}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    currentCategory === category.slug
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground/80"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({category.count})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            Categories will appear here once you add posts in WordPress.
          </p>
        )}
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
        <h3 className="font-display text-lg font-bold mb-2">
          Looking for Care?
        </h3>
        <p className="text-sm opacity-90 mb-4">
          Find the perfect family day home for your child in Calgary & area.
        </p>
        <Link
          to="/parents#contact"
          className="inline-block bg-background text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-background/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </aside>
  );
};

export default BlogSidebar;
