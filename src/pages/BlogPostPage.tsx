
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/resourcesData";
import { ChevronLeft, Calendar, User, Tag } from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (id) {
      const currentPost = blogPosts.find((post) => post.id === parseInt(id));
      setPost(currentPost || null);
      
      // Find related posts (same category, excluding current post)
      if (currentPost) {
        const related = blogPosts
          .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Blog post not found</h1>
            <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="mt-6 inline-block btn-outline">
              Back to All Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="w-full h-64 md:h-96 relative bg-gray-800">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8 md:pb-12">
              <div className="flex items-center space-x-2 text-white/90 mb-4">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-medium">{post.category}</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
              <div className="flex flex-wrap items-center mt-4 text-white/80 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary-green hover:text-primary-green/80 mb-8"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to All Articles
            </Link>
            
            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700">{post.excerpt}</p>
              
              <p className="my-6">
                Education is a powerful tool that shapes futures and transforms lives. At Medh Foundation, we believe that quality education should be accessible to every child, regardless of their socioeconomic background. This principle guides our educational initiatives, community programs, and advocacy efforts.
              </p>
              
              <h2>The Impact of Equitable Education</h2>
              <p>
                When every child has access to quality education, entire communities flourish. Research consistently shows that education is one of the most effective ways to break the cycle of poverty. It empowers individuals with the knowledge, skills, and confidence needed to pursue their aspirations and contribute meaningfully to society.
              </p>
              
              <p>
                In many underprivileged communities, barriers to education persist. These include financial constraints, inadequate infrastructure, shortage of qualified teachers, and social norms that may prioritize immediate economic needs over long-term educational investments. Our programs address these challenges through a holistic approach.
              </p>
              
              <h2>Our Educational Initiatives</h2>
              <p>
                Through partnerships with local schools, community organizations, and dedicated volunteers, we implement various initiatives:
              </p>
              <ul>
                <li>Scholarship programs that cover tuition fees, books, and supplies</li>
                <li>After-school learning centers that provide academic support and mentorship</li>
                <li>Teacher training workshops to enhance the quality of education</li>
                <li>Digital literacy programs that bridge the technological divide</li>
                <li>Awareness campaigns that emphasize the value of education</li>
              </ul>
              
              <h2>The Path Forward</h2>
              <p>
                Creating sustainable educational change requires collaborative efforts from all stakeholders. By working together — governments, non-profit organizations, educational institutions, communities, and individuals — we can build an educational ecosystem that nurtures every child's potential.
              </p>
              
              <p>
                We invite you to join us in this journey. Whether through volunteering, donations, or spreading awareness about the importance of equitable education, your support can make a significant difference in a child's life.
              </p>
              
              <blockquote>
                "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
              </blockquote>
              
              <p>
                This quote encapsulates our belief in the transformative power of education. Every child deserves the opportunity to learn, grow, and thrive. Together, we can make this vision a reality.
              </p>
              
              <hr className="my-8" />
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Education</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Community Development</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Social Impact</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((post) => (
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
                            to={`/blog/${post.id}`}
                            className="text-primary-green hover:text-primary-green/80 font-medium text-sm transition-colors"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
