import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/UI/BlogCard';
import AnimatedSection from '../../components/UI/AnimatedSection';

const BlogPreview: React.FC = () => {
  const blogs = [
    {
      id: "1",
      title: "Education's Role in Community Development",
      excerpt: "Exploring how education initiatives can drive sustainable development in underserved communities.",
      date: "May 15, 2023",
      author: "Dr. Amrita Singh",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Education", "Community"]
    },
    {
      id: "2",
      title: "Digital Literacy Programs: Bridging the Gap",
      excerpt: "How our digital literacy programs are empowering students with essential 21st-century skills.",
      date: "April 22, 2023",
      author: "Rahul Mehta",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Technology", "Skills"]
    },
    {
      id: "3",
      title: "Supporting Girls' Education: Challenges and Victories",
      excerpt: "Highlighting the challenges faced in promoting girls' education and our successful interventions.",
      date: "March 8, 2023",
      author: "Leela Krishnan",
      image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categories: ["Gender Equality", "Education"]
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Blog</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Insights, stories, and updates from our educational initiatives and impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              author={blog.author}
              image={blog.image}
              categories={blog.categories}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;