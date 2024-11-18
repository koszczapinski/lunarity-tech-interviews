import { useEffect, useState } from "react";

/*
 * This implementation includes several best practices:
 * 1. TypeScript Support: We define a Post type for better type safety.
 * 2. Loading & Error States: The component handles both loading and error states gracefully.
 * 3. Cleanup: We use the isMounted flag to prevent setting state on an unmounted component.
 * 4. Error Handling: Proper error handling with try/catch and response status checking.
 * 5. Accessibility: The posts are properly marked up with ARIA labels and tabindex.
 * 6. Responsive Design: Using Tailwind's responsive classes for a grid layout.
 */

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Track if the component is mounted
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        // Only update state if component is still mounted
        if (isMounted) {
          setPosts(data);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "An error occurred");
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array means this runs once on mount

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-700">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            tabIndex={0}
            role="article"
            aria-label={`Post: ${post.title}`}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
