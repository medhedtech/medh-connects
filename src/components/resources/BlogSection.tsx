
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  category: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  // Display only the first 3 blog posts
  const displayedPosts = blogPosts.slice(0, 3);
  
  return (
    <section id="news" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">Knowledge Hub</span>
          <h2 className="mt-4 text-3xl font-bold">Blog & Articles</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link 
                    to={`/resources/blog/${post.id}`}
                    className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/blog"
            className="btn-outline"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
