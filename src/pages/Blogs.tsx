import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerCard from "../components/Cards/BannerCard";
import { getContentByFolder } from "../utils/firebaseUtils";

interface BlogPost {
    id: string;
    heading: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readtime: string;
    image: string;
    content: string;
}

const Blogs: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const title = "Gender Cell Blog";
    const description = "Insights, stories, and perspectives on gender equality, inclusivity, and campus life";
    const buttons = [{ label: "All Blogs", sectionId: "all-blogs" }];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogData = await getContentByFolder("blogs");
                setBlogPosts(blogData.reverse());
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleReadMore = (index: number) => {
        // Assuming the ID logic is index + 1 based on the original code, 
        // but ideally it should use post.id if available and consistent.
        // The original code used index + 1.
        navigate(`/blogs/${index + 1}`);
    };

    return (
        <div className="min-h-screen bg-base-100">
            <BannerCard title={title} description={description} buttons={buttons} />

            <div className="container mx-auto px-4 py-16" id="all-blogs">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article key={post.id || index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 flex flex-col h-full">
                                <figure className="relative h-64 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.heading}
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 badge badge-primary badge-lg">{post.category}</div>
                                </figure>
                                <div className="card-body flex-grow">
                                    <div className="flex justify-between items-center text-sm text-base-content/60 mb-4">
                                        <span className="font-semibold text-primary">{post.author}</span>
                                        <span>{post.date} • {post.readtime}</span>
                                    </div>
                                    <h2 className="card-title text-2xl font-serif mb-4 hover:text-primary transition-colors cursor-pointer" onClick={() => handleReadMore(index)}>
                                        {post.heading}
                                    </h2>
                                    <p className="text-base-content/80 line-clamp-3 mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="card-actions justify-end mt-auto">
                                        <button
                                            className="btn btn-primary btn-outline"
                                            onClick={() => handleReadMore(index)}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
