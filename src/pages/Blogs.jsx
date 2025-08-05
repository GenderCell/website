import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Blogs.css';
import BannerCard from '../components/Card/BannerCard';
import sneha from '../assets/blogs/sneha.png';


function Blogs() {
  const navigate = useNavigate();
  const title = "Gender Cell Blog";
  const description = "Insights, stories, and perspectives on gender equality, inclusivity, and campus life";
  const buttons = [
    { label: "All Blogs", sectionId: "all-blogs" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "It’s not about intention, it’s about impact\n“Understanding Sexual Harassment Beyond “I Didn’t Mean It”\n\nWritten by Snehlata Rao",
      excerpt: "Sexual harassment often occurs not because someone intends harm but because they fail to understand the impact of their actions. That’s why understanding the impact over intention is so important, especially in the context of gender sensitivity.",
      author: "Snehlata Rao",
      date: "August 5, 2025",
      category: "Awareness",
      readTime: "5 min read",
      image: sneha,
      content: `<p>“It was just a compliment.”<br/>“It’s normal, you are overreacting.”<br/>“I was just being friendly.”<br/>“Why are you behaving like a girl?”.</p>
<p>You’ve probably heard these lines or maybe even said them. In an educated and thoughtful campus community like IIT Kanpur, most people don’t try to make sexist comments or be disrespectful. Still, comments like these can come under sexual harassment if the other person is not comfortable or has already asked you to stop.<br/>Sexual harassment often occurs not because someone intends harm but because they fail to understand the impact of their actions.<br/>That’s why understanding the impact over intention is so important, especially in the context of gender sensitivity.</p>
<p><b>What Does It Mean?</b><br/>“Intention” is what you meant to do.<br/>“Impact” is what the other person experienced because of it.<br/>You might not mean to be disrespectful, or hurtful but if someone feels disrespected, offended or unsafe because of your words or behaviour, that feeling is valid.</p>
<p>Here are some real examples that show the gap between intention and impact:</p>
<ul>
<li>“You look so hot in that dress.” (said to a classmate)<br/><b>Intention:</b> Giving a compliment.<br/><b>Impact:</b> Unwanted sexual attention that makes the person feel objectified or uncomfortable in an academic space.</li>
<li>Staring at someone during class or lab.<br/><b>Intention:</b> Admiring someone.<br/><b>Impact:</b> Makes the person feel watched or uneasy, especially if it happens often.</li>
<li>Sending late-night texts like “You up?” or “Send me a pic.”<br/><b>Intention:</b> Flirting.<br/><b>Impact:</b> Invading boundaries; can feel harassing.</li>
</ul>
<p><b>For the one who is affected (victim):</b><br/>It’s also important to talk about the person who feels uncomfortable, hurt, or harassed.<br/>If you feel someone’s words or actions are making you uncomfortable you should speak up and set a clear boundary because people often do not realise that they are making you uncomfortable.<br/>You have every right to say:</p>
<ul>
<li>“That makes me uncomfortable.”</li>
<li>“Please don’t say things like that to me.”</li>
<li>“I didn’t like that message you sent.”</li>
<li>“I’m not okay with this behavior.”</li>
</ul>
<p>Being clear and direct can help the other person understand your boundaries. It also gives them a chance to correct their behavior.<br/>Let’s be the kind of IITK community that:<br/>Open for feedback.<br/>Apologizes with maturity.<br/>Respect others' boundaries.</p>
<p>In classrooms, hostels, labs, or clubs being mindful of how we make others feel is as important as being right or well-intentioned. Learns, grows, and creates safer spaces together.</p>`
    },
  ];

  const handleReadMore = (postId) => {
    navigate(`/blogs/${postId}`);
  };

  return (
    <div className="blogs-container">
      {/* Hero Section */}
      <BannerCard title={title} description={description} buttons={buttons} />
     

      {/* Main Content */}
      <div className="blogs-main">
        <div className="blogs-content">
          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button 
                    className="read-more-btn"
                    onClick={() => handleReadMore(post.id)}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs; 