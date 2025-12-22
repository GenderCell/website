import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContentByFolder } from '../utils/firebaseUtils';

interface BlogPostData {
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

const BlogPost: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPostData[]>([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogData = await getContentByFolder('blogs');
                setBlogPosts(blogData.reverse());
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-base-100">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    const postIndex = id ? parseInt(id) - 1 : -1;
    const post = blogPosts[postIndex];

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 space-y-6">
                <h1 className="text-4xl font-bold text-error font-heading">Blog Post Not Found</h1>
                <p className="text-lg text-base-content/70">The blog post you're looking for doesn't exist.</p>
                <button onClick={() => navigate("/blogs")} className="btn btn-primary">
                    Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <button
                    onClick={() => navigate("/blogs")}
                    className="btn btn-ghost mb-8 hover:bg-base-200 gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Blogs
                </button>

                <article className="bg-base-100 rounded-xl overflow-hidden">
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-10 shadow-lg">
                        <img
                            src={post.image}
                            alt={post.heading}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 items-center text-sm text-base-content/60 mb-6 font-medium">
                        <span className="badge badge-primary badge-lg">{post.category}</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readtime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight text-base-content">
                        {post.heading}
                    </h1>

                    <div className="flex items-center gap-4 mb-10 p-4 bg-base-200 rounded-lg w-fit">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                <span className="text-xl">{post.author.charAt(0)}</span>
                            </div>
                        </div>
                        <span className="font-semibold text-lg">By {post.author}</span>
                    </div>

                    <div
                        className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary-focus prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
