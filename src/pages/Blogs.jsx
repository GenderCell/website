import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Blogs.css';
import BannerCard from '../components/Card/BannerCard';
import sneha from '../assets/blogs/sneha.png';
import sonal from '../assets/blogs/sonal.png';



function Blogs() {
  const navigate = useNavigate();
  const title = "Gender Cell Blog";
  const description = "Insights, stories, and perspectives on gender equality, inclusivity, and campus life";
  const buttons = [
    { label: "All Blogs", sectionId: "all-blogs" },
  ];

  const blogPosts = [
    {
  id: 2,
  title: "The Gender Lens: Seeing What We Miss\n\nWritten by Sonal",
  excerpt: "Bias doesn’t always arrive with insults or discrimination. It’s often hidden in the way we give compliments, divide responsibilities, or make casual remarks.",
  author: "Sonal",
  date: "September 6, 2025",
  category: "Awareness",
  readTime: "7 min read",
  image: sonal,
  content: `
    <h1>The Gender Lens: Seeing What We Miss</h1>
    <h2>Seeing Beyond Stereotypes: The Subtle Ways Gender Shapes Our World</h2>
    <p>In our daily lives—between lectures, deadlines, and coffee breaks—it’s easy to miss the quiet forces shaping our experiences. We often think classrooms, workplaces, or public spaces are neutral, where only merit and hard work decide outcomes. But the truth is more complicated. Gender, even when invisible, often changes how people are seen, heard, and treated.</p>
    <p>Looking through a gender lens doesn’t mean focusing only on women’s issues or men’s challenges. It means pausing to notice how gender norms, expectations, and biases affect all of us—often in ways we’ve learned not to notice.</p>

    <h2>What Is the “Gender Lens”?</h2>
    <p>The gender lens is not a filter to twist reality—it’s a tool to reveal it. It helps us ask:</p>
    <ul>
      <li><b>Who is included in this space, and who is left out?</b><br/>(For example, hackathons or coding clubs often see mostly boys, while girls feel less encouraged to join. On the other hand, dance groups may have fewer boys because dance is wrongly called “feminine.”)</li>
      <li><b>Whose voice gets amplified, and whose is ignored?</b><br/>(When a boy cries or shows emotions, people say, “Why are you crying like a girl?” instead of accepting his feelings. But when a girl cries, she may receive comfort.)</li>
      <li><b>Are the same behaviours judged differently based on gender?</b><br/>(When men lose their temper, it is brushed off as “normal,” but if women do the same, they may be called “unfeminine” or “rude.”)</li>
      <li><b>What assumptions are we carrying without realizing?</b><br/>(Like thinking men are naturally better with coding or finances, while women are “better suited” for planning events or hospitality.)</li>
    </ul>

    <p>And the examples of these subtle behaviors go on:</p>
    <ul>
      <li>In many forms, the dependent option is automatically listed as “wife,” assuming men are the main applicants.</li>
      <li>If a girl faces harassment, it’s usually taken seriously. But if a boy goes through the same, people may make fun of him instead of supporting him.</li>
      <li>When someone from the LGBTQ community introduces themselves with their pronouns, people sometimes laugh or ignore it, as if their identity doesn’t matter.</li>
      <li>When a girl leads a team and gets things done, some dismiss it by saying, “People agreed only because you’re a girl,” instead of acknowledging her leadership.</li>
    </ul>

    <p>These may look like small things, but they shape how students, faculty, and staff feel every day.</p>

    <h2>Gender Stereotypes Hurt Everyone</h2>
    <ul>
      <li>Men may feel pressured to hide emotions and “act strong,” even at the cost of mental health.</li>
      <li>Non-binary and transgender students may feel invisible or unsafe in spaces built only for “boys” and “girls.”</li>
      <li>Women may be interrupted more in discussions or underrepresented in leadership and STEM.</li>
    </ul>

    <h2>Why We Miss What We Miss</h2>
    <p>Bias doesn’t always arrive with insults or discrimination. It’s often hidden in the way we give compliments, divide responsibilities, or make casual remarks. Most of us don’t mean harm—we’re just repeating norms we’ve inherited. That’s why the gender lens matters. It makes the invisible visible. On campus, using a gender lens can change how we work, study, and live together. It can guide how we form teams, lead projects, host events, and support each other.</p>

    <h2>Building a More Inclusive Campus</h2>
    <p>On campus, adopting a gender lens can be transformative. It can inform how we form teams, lead group projects, host events, or respond to peer behaviour. It can shape policy, but more importantly, it can reshape culture.</p>
    <p>We can make a difference by starting with tiny changes like:</p>
    <ul>
      <li>Using inclusive language</li>
      <li>Making sure women, men, and gender minorities feel safe sharing ideas in class or clubs</li>
      <li>Rotating roles in group work, so every gender is equally represented.</li>
      <li>Valuing skills and ideas, not just appearance, when giving compliments</li>
      <li>Questioning gendered assumptions in sports, cultural events, or technical clubs</li>
    </ul>

    <p>These may not look like big changes, but together, they create fairness and dignity.</p>
    <p>Looking through the gender lens means asking better questions. It’s about understanding more and assuming less. We just need to start noticing what we’ve been missing. The gender lens helps us see the gender biased patterns—not to blame, but to begin conversations and change.<br/>Let’s begin there.</p>
  `
},    {
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
    }
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