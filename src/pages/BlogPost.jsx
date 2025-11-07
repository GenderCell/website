import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/BlogPost.css';
import sneha from '../assets/blogs/sneha.png';
import sonal from '../assets/blogs/sonal.png';
import parul from '../assets/blogs/parul.png';
import bhavit from '../assets/blogs/bhavit.png';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [

    {
  id: 4,
  title: "Understanding The Harassment In College\n\nWritten by Gender Cell IIT Kanpur",
  excerpt: "College is meant to be a space to learn and grow — not a place where anyone feels unsafe or unheard. Yet harassment remains one of the most ignored issues on campuses.",
  author: "Bhavit Meena",
  date: "6th November, 2025",
  category: "Awareness",
  readTime: "6 min read",
  image: bhavit,
  content: `
    <h2>Understanding The Harassment In College</h2>
    <h3>Creating a Campus Where Everyone Feels Safe, Respected, and Heard</h3>
    <p>College is meant to be a space to learn, grow, and discover who you are. However, for many students, faculties and staff members, it can also become a place where they face uncomfortable or even unsafe situations. One of the persistent challenges in college environments is harassment. Even though discussions about it have become more common, many still choose to ignore or avoid the issue.</p>
    <p>A major complication is that many students, employees and faculty don’t fully understand what harassment truly is. It is often brushed off as “fun,” “just a joke,” or “part of college culture.” This misunderstanding makes it difficult to recognize when boundaries are crossed — which is why it’s crucial to pause and understand what harassment really means.</p>

    <h2>What Exactly Is Harassment?</h2>
    <p>Harassment occurs when someone does or says something, either in person or online, that makes another person feel uncomfortable, unsafe, or disrespected. It can come from classmates, teachers, staff members, colleagues, or others. The impact is real, affecting mental health, focus, and overall college experience.</p>

    <h2>Common Types of Harassment</h2>

    <h3>Sexual Harassment</h3>
    <p>Any unwelcome conduct of a sexual nature — verbal, non-verbal, physical, or visual — that causes discomfort, humiliation, or intimidation. Examples include unwanted touching, comments or gestures, stalking, sending explicit content without consent, or requesting sexual favors in exchange for grades or opportunities.</p>

    <h3>Ragging and Bullying</h3>
    <p>Ragging and bullying involve forcing juniors into humiliating tasks, from embarrassing acts (singing, dancing, or unusual self-introductions) to verbal abuse, physical intimidation, or even violence, often justified as “fun” or “tradition.”</p>

    <h3>Cyber Harassment and Cyberbullying</h3>
    <p>In today’s digital era, online spaces are also vulnerable to harassment. Cyber harassment includes threatening messages, spreading lies, sharing private photos without consent, or doxxing (leaking someone’s personal details such as phone numbers).</p>

    <h3>Discrimination-Based Harassment</h3>
    <p>Harassment may target individuals based on caste, religion, gender, sexuality, or disability. Such behavior isolates individuals, fosters exclusion, and creates a hostile campus environment rather than a supportive one.</p>

    <h3>Mental and Emotional Harassment</h3>
    <p>Not all harassment is physical. Psychological harm can be just as damaging. Constant insults, manipulation, or isolating someone from group activities can break confidence and affect mental well-being. Often masked as “just kidding,” its impact is very real.</p>

    <h3>Power and Authority Harassment</h3>
    <p>Those in positions of authority can misuse their power, causing deep harm. Faculty may unfairly grade, deny resources, or demand personal favors for academic support. Seniors in hostels or club leaders can also exploit their position to intimidate or silence others, creating fear and inequality.</p>

    <h2>Why Do People Stay Silent?</h2>
    <p>Many hesitate to report harassment, and the reasons are complex. Some fear of being judged, excluded, or labeled as “too sensitive.” Others are unsure if their experience qualifies as harassment, especially when behaviors are normalized in the name of “fun” or “culture.” Many don’t know where or how to report, while some fear retaliation from the harasser. Others simply believe their complaint will not be taken seriously.</p>
    <p>The result? Silence allows harassment to continue — not just for one person, but for others who may face the same situation later.</p>

    <h2>What Can We Actually Do?</h2>
    <ul>
      <li><b>Speak Up:</b> If something feels wrong, it probably is. Don’t ignore that feeling. Keep evidence (messages, screenshots, etc.) and report the incident.</li>
      <li><b>Know Where to Go for Help:</b> Colleges have support systems in place. At IITK, these include the <b>Gender Cell</b>, the <b>Internal Complaints Committee (ICC)</b> for sexual harassment, and the <b>Anti-Ragging Committee</b>. They exist to help and handle matters confidentially and fairly. Don’t hesitate to reach out.</li>
      <li><b>Spread Awareness:</b> Discussing harassment matters. Organizing or attending workshops, events, and open discussions helps make the campus safer and more respectful for everyone.</li>
      <li><b>Support Each Other:</b> When someone speaks up, believe them and stand by their side. Never dismiss experiences as “normal culture” or “just fun.” Even small acts of support can give someone the courage to come forward.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>College should be a place to learn, grow, and feel safe — not a place where anyone feels uncomfortable or scared. Often, people don’t intend to harass, but their actions can still cause harm, no matter how harmless the intention seems. Each of us has a role to play in making our campus safer, kinder, and more inclusive. By speaking up, supporting each other, and using the help systems already in place, we can turn awareness into real change — and ensure that everyone can enjoy college without fear.</p>
    <p><b>So next time, when you take an action “just for fun,” pause and ask:</b> Am I actually harming someone? Change starts with us, and even small actions can make a big difference.</p>

    <h2>Creating a Culture of Clear Consent</h2>
    <p>Creating a culture of clear consent so everyone can learn, live, and belong.</p>
    <p>College should be a place to grow, intellectually, socially, and morally. But when interactions that should be harmless become invasive, they steal safety and opportunity.</p>

    <h3>What Exactly Is Consent?</h3>
    <p>At its simplest, consent means permission given freely and knowingly. Consent is about mutual respect and communication. It involves checking in with others and respecting their right to say no or to change their mind.</p>
    <p>In any type of relationship — romantic, platonic, or professional — consent ensures that everyone feels safe and empowered to make decisions about their bodies, emotions, and boundaries.</p>

    <h3>Why Focus on Consent on Campus?</h3>
    <p>Clear consent is essential to prevent misunderstandings, protect people from unwanted actions, and build trust and respect. Without it, even small actions can cause discomfort, confusion, or harm. Whether it’s a group activity, a social event, or personal interactions, saying “yes” or “no” clearly ensures everyone knows what is okay and creates a campus where everyone feels safe, valued, and included.</p>

    <h3>The FRIES Model of Consent</h3>
    <p>A useful way to understand consent is through the FRIES model, developed by Planned Parenthood:</p>
    <ul>
      <li><b>F – Freely Given:</b> Consent must be given voluntarily, without manipulation, pressure, threats, or intoxication. <i>Example:</i> If someone is pressured into a relationship by a colleague, senior, or supervisor in exchange for benefits like grades or job opportunities, that is not valid consent.</li>
      <li><b>R – Reversible:</b> Anyone can change their mind at any time. Consent is ongoing. <i>Example:</i> Someone agrees to a kiss but halfway through says “stop.” Their choice must be respected immediately.</li>
      <li><b>I – Informed:</b> All parties must have full information before giving consent. Misleading or hiding facts makes consent invalid. <i>Example:</i> If you asked someone for consent to kiss but then started hugging them instead, that consent is not informed — they agreed to one thing, not another.</li>
      <li><b>E – Enthusiastic:</b> Consent should come from genuine willingness, not reluctant agreement. <i>Example:</i> If you ask someone for consent and they stay silent or avoid answering, their silence does not mean yes. Only a clear, willing “yes” counts.</li>
      <li><b>S – Specific:</b> Saying yes to one activity does not mean yes to everything. Each act needs separate consent. <i>Example:</i> Agreeing to hold hands does not mean agreeing to hug. Each step needs a clear agreement.</li>
    </ul>
    <p>The FRIES model reminds us that consent is not a formality — it is about respect, communication, and empathy.</p>

    <h3>Practical Steps for a Consent-Friendly Campus</h3>
    <ul>
      <li><b>Ask clearly and listen carefully:</b> Always ask direct questions. If someone hesitates or seems unsure, stop. Consent is never assumed from silence or past behavior.</li>
      <li><b>Respect boundaries and power differences:</b> If you are in a position of authority, be extra careful. People may feel pressured to say “yes” even if they mean “no.” Never ask for favors in exchange for grades, opportunities, or social benefits.</li>
      <li><b>Always feel free to say “No”:</b> Saying no is your right and must be respected. Your choice can change anytime, and you don’t owe an explanation.</li>
      <li><b>Keep evidence if needed:</b> If harassment or non-consensual behavior occurs, save messages, screenshots, dates, times, and witnesses. This helps with formal reporting.</li>
    </ul>

    <h3>Reporting Consent Violations</h3>
    <p>If someone violates your consent, report it through the proper campus channels, such as the <b>Internal Complaints Committee (ICC)</b> or <b>Gender Cell</b>. Reporting helps ensure the problem is addressed and prevents harm from continuing.</p>

    <h3>Conclusion</h3>
    <p>Consent may seem simple in theory, but it can be complicated in practice. Change starts with asking direct questions, respecting answers, and supporting a culture that values safety and respect. When everyone participates, institutions provide clear support, and harmful behaviors are not tolerated, the campus becomes a place where everyone can learn, live, and belong. Even small actions can make a big difference.</p>
  `
}
,{
  id: 3,
  title: "Understanding The Harassment In College\n\nWritten by Gender Cell IIT Kanpur",
  excerpt: "College is meant to be a space to learn and grow — not a place where anyone feels unsafe or unheard. Yet harassment remains one of the most ignored issues on campuses.",
  author: "Parul Parmar",
  date: "6th October, 2025",
  category: "Awareness",
  readTime: "8 min read",
  image: parul,
  content: `
    <h2>Understanding The Harassment In College</h2>
    <h3>Creating a Campus Where Everyone Feels Safe, Respected, and Heard</h3>
    <p>College is meant to be a space to learn, grow, and discover who you are. However, for many students, faculties and staff members, it can also become a place where they face uncomfortable or even unsafe situations. One of the persistent challenges in college environments is harassment. Even though discussions about it have become more common, many still choose to ignore or avoid the issue.</p>
    <p>A major complication is that many students, employees and faculty don’t fully understand what harassment truly is. It is often brushed off as “fun,” “just a joke,” or “part of college culture.” This misunderstanding makes it difficult to recognize when boundaries are crossed — which is why it’s crucial to pause and understand what harassment really means.</p>

    <h2>What Exactly Is Harassment?</h2>
    <p>Harassment occurs when someone does or says something, either in person or online, that makes another person feel uncomfortable, unsafe, or disrespected. It can come from classmates, teachers, staff members, colleagues, or others. The impact is real, affecting mental health, focus, and overall college experience.</p>

    <h2>Common Types of Harassment</h2>

    <h3>Sexual Harassment</h3>
    <p>Any unwelcome conduct of a sexual nature — verbal, non-verbal, physical, or visual — that causes discomfort, humiliation, or intimidation. Examples include unwanted touching, comments or gestures, stalking, sending explicit content without consent, or requesting sexual favors in exchange for grades or opportunities.</p>

    <h3>Ragging and Bullying</h3>
    <p>Ragging and bullying involve forcing juniors into humiliating tasks, from embarrassing acts (singing, dancing, or unusual self-introductions) to verbal abuse, physical intimidation, or even violence, often justified as “fun” or “tradition.”</p>

    <h3>Cyber Harassment and Cyberbullying</h3>
    <p>In today’s digital era, online spaces are also vulnerable to harassment. Cyber harassment includes threatening messages, spreading lies, sharing private photos without consent, or doxxing (leaking someone’s personal details such as phone numbers).</p>

    <h3>Discrimination-Based Harassment</h3>
    <p>Harassment may target individuals based on caste, religion, gender, sexuality, or disability. Such behavior isolates individuals, fosters exclusion, and creates a hostile campus environment rather than a supportive one.</p>

    <h3>Mental and Emotional Harassment</h3>
    <p>Not all harassment is physical. Psychological harm can be just as damaging. Constant insults, manipulation, or isolating someone from group activities can break confidence and affect mental well-being. Often masked as “just kidding,” its impact is very real.</p>

    <h3>Power and Authority Harassment</h3>
    <p>Those in positions of authority can misuse their power, causing deep harm. Faculty may unfairly grade, deny resources, or demand personal favors for academic support. Seniors in hostels or club leaders can also exploit their position to intimidate or silence others, creating fear and inequality.</p>

    <h2>Why Do People Stay Silent?</h2>
    <p>Many hesitate to report harassment, and the reasons are complex. Some fear of being judged, excluded, or labeled as “too sensitive.” Others are unsure if their experience qualifies as harassment, especially when behaviors are normalized in the name of “fun” or “culture.” Many don’t know where or how to report, while some fear retaliation from the harasser. Others simply believe their complaint will not be taken seriously.</p>
    <p>The result? Silence allows harassment to continue — not just for one person, but for others who may face the same situation later.</p>

    <h2>What Can We Actually Do?</h2>
    <ul>
      <li><b>Speak Up:</b> If something feels wrong, it probably is. Don’t ignore that feeling. Keep evidence (messages, screenshots, etc.) and report the incident.</li>
      <li><b>Know Where to Go for Help:</b> Colleges have support systems in place. At IITK, these include the <b>Gender Cell</b>, the <b>Internal Complaints Committee (ICC)</b> for sexual harassment, and the <b>Anti-Ragging Committee</b>. They exist to help and handle matters confidentially and fairly. Don’t hesitate to reach out.</li>
      <li><b>Spread Awareness:</b> Discussing harassment matters. Organizing or attending workshops, events, and open discussions helps make the campus safer and more respectful for everyone.</li>
      <li><b>Support Each Other:</b> When someone speaks up, believe them and stand by their side. Never dismiss experiences as “normal culture” or “just fun.” Even small acts of support can give someone the courage to come forward.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>College should be a place to learn, grow, and feel safe — not a place where anyone feels uncomfortable or scared. Often, people don’t intend to harass, but their actions can still cause harm, no matter how harmless the intention seems. Each of us has a role to play in making our campus safer, kinder, and more inclusive. By speaking up, supporting each other, and using the help systems already in place, we can turn awareness into real change — and ensure that everyone can enjoy college without fear.</p>
    <p><b>So next time, when you take an action “just for fun,” pause and ask:</b> Am I actually harming someone? Change starts with us, and even small actions can make a big difference.</p>
  `
},{
      id: 2,
      title: "The Gender Lens: Seeing What We Miss\n\nWritten by Sonal",
      excerpt: "Bias doesn’t always arrive with insults or discrimination. It’s often hidden in the way we give compliments, divide responsibilities, or make casual remarks.",
      author: "Sonal",
      date: "September 6, 2025",
      category: "Awareness",
      readTime: "7 min read",
      image: sonal,
      content: `
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
          <li>When a girl leads a team and gets things done, some dismiss it by saying, “People agreed only because you’re a girl,” instead of acknowledging her leadership.</li>
        </ul>
    
        <p>These may look like small things, but they shape how students, faculty, and staff feel every day.</p>
    
        <h2>Gender Stereotypes Hurt Everyone</h2>
        <ul>
          <li>Men may feel pressured to hide emotions and “act strong,” even at the cost of mental health.</li>
          <li>Some people may feel invisible or unsafe in spaces built only for specific genders.</li>
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
    },  ,{
      id: 1,
      title: "It’s not about intention, it’s about impact",
      excerpt: "Sexual harassment often occurs not because someone intends harm but because they fail to understand the impact of their actions. That’s why understanding the impact over intention is so important, especially in the context of gender sensitivity.",
      author: "Snehlata Rao",
      date: "April 2024",
      category: "Awareness",
      readTime: "5 min read",
      image: sneha,
      content: `
      <h2><strong>Understanding Sexual Harassment Beyond “I Didn’t Mean It”</strong></h2>
      
      <p>“It was just a compliment.”<br/>“It’s normal, you are overreacting.”<br/>“I was just being friendly.”<br/>“Why are you behaving like a girl?”.</p>
<p>You’ve probably heard these lines or maybe even said them. In an educated and thoughtful campus community like IIT Kanpur, most people don’t try to make sexist comments or be disrespectful. Still, comments like these can come under sexual harassment if the other person is not comfortable or has already asked you to stop.<br/>
</p><p><strong>Sexual harassment often occurs not because someone intends harm but because they fail to understand the impact of their actions.</strong><br/>That’s why understanding the impact over intention is so important, especially in the context of gender sensitivity.</p>
<p><b>What Does It Mean?</b><br/>“<strong>Intention</strong>” is what you meant to do.<br/>“<strong>Impact</strong>” is what the other person experienced because of it.<br/>You might not mean to be disrespectful, or hurtful but if someone feels disrespected, offended or unsafe because of your words or behaviour, that feeling is valid.</p>
<p>Here are some real examples that show the gap between intention and impact:</p>
<ul>
<li>1. “ You look so hot in that dress.” (said to a classmate)<br/><b>Intention:</b> Giving a compliment.<br/><b>Impact:</b> Unwanted sexual attention that makes the person feel objectified or uncomfortable in an academic space.</li>
<li>2. Staring at someone during class or lab.<br/><b>Intention:</b> Admiring someone.<br/><b>Impact:</b> Makes the person feel watched or uneasy, especially if it happens often.</li>
<li>3. Sending late-night texts like “You up?” or “Send me a pic.”<br/><b>Intention:</b> Flirting.<br/><b>Impact:</b> Invading boundaries; can feel harassing.</li>
</ul>
<p><b>For the one who is affected (victim):</b><br/>It’s also important to talk about the person who feels uncomfortable, hurt, or harassed.<br/>If you feel someone’s words or actions are making you uncomfortable <strong>you should speak up and set a clear boundary</strong> because people often do not realise that they are making you uncomfortable.<br/>You have every right to say:</p>
<ul>
<li>“That makes me uncomfortable.”</li>
<li>“Please don’t say things like that to me.”</li>
<li>“I didn’t like that message you sent.”</li>
<li>“I’m not okay with this behavior.”</li>
</ul>
<p>Being clear and direct can help the other person understand your boundaries. It also gives them a chance to correct their behavior.<br/> <strong>Let’s be the kind of IITK community that:</strong><br/>Open for feedback.<br/>Apologizes with maturity.<br/>Respect others' boundaries.</p>
<p> <strong>In classrooms, hostels, labs, or clubs being mindful of how we make others feel is as important as being right or well-intentioned. Learns, grows, and creates safer spaces together.</strong></p>`
    },
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/blogs')} className="back-btn">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <button onClick={() => navigate('/blogs')} className="back-btn">
          ← Back to Blogs
        </button>
      </div>
      
      <article className="blog-post-content">
        <div className="blog-post-image">
          <img src={post.image} alt={post.title} />
        </div>
        
        <div className="blog-post-meta">
          <span className="blog-post-category">{post.category}</span>
          <span className="blog-post-date">{post.date}</span>
          <span className="blog-post-read-time">{post.readTime}</span>
        </div>
        
        <h1 className="blog-post-title">{post.title}</h1>
        
        <div className="blog-post-author">
          <span>By {post.author}</span>
        </div>
        
        <div 
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

export default BlogPost; 