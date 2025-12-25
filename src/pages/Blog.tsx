import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { usePosts, isWordPressConfigured } from "@/hooks/useWordPress";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, BookOpen } from "lucide-react";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category") || undefined;
  const { data: posts, isLoading, error } = usePosts(12, categorySlug);

  return (
    <Layout>
      <Helmet>
        <title>Blog | Tima Family Day Home Agency</title>
        <meta
          name="description"
          content="Read the latest articles about child development, parenting tips, and early childhood education from Tima Family Day Home Agency."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-subtle pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Blog
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Insights & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, stories, and advice for parents and educators in the family day home community.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Posts Grid */}
            <div>
              {!isWordPressConfigured ? (
                <div className="bg-card rounded-2xl border border-border/50 p-8 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Blog Coming Soon
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Our blog is being set up. Once WordPress is connected, you'll see helpful articles about child development, parenting tips, and more.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>For developers:</strong> Set <code className="bg-muted px-1 rounded">VITE_WORDPRESS_API_URL</code> environment variable to your WordPress GraphQL endpoint.
                  </p>
                </div>
              ) : isLoading ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                      <Skeleton className="h-48 w-full" />
                      <div className="p-6 space-y-3">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <div className="flex justify-between">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="bg-destructive/10 rounded-2xl p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Unable to Load Posts
                  </h2>
                  <p className="text-muted-foreground">
                    There was an error connecting to the blog. Please try again later.
                  </p>
                </div>
              ) : posts && posts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border/50 p-8 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    No Posts Yet
                  </h2>
                  <p className="text-muted-foreground">
                    Check back soon for new articles and updates from our team.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <BlogSidebar currentCategory={categorySlug} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
