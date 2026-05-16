import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Blogs.css';
import BannerCard from '../components/Card/BannerCard';
import sneha from '../assets/blogs/sneha.png';
import sonal from '../assets/blogs/sonal.png';
import parul from '../assets/blogs/parul.png';
import bhavit from '../assets/blogs/bhavit.png';
import aradhna from '../assets/blogs/aradhana.png';
import vatsal from '../assets/blogs/vatsal.png';
import jyoti from '../assets/blogs/jyoti.png';
import image from '../assets/blogs/image.png'

import pushpender from '../assets/blogs/pushpender.png'

function Blogs() {
  const navigate = useNavigate();
  const title = "Gender Cell Blog";
  const description = "Insights, stories, and perspectives on gender equality, inclusivity, and campus life";
  const buttons = [
    { label: "All Blogs", sectionId: "all-blogs" },
  ];

  const blogPosts = [
    {
      id: 9,
      title: "Men Need Feminism Too: What I Learned as a Male and a Feminist",
      excerpt: "Feminism is not against men; it is about equality. People often react strangely when I call myself a feminist. But the truth is simple: Feminism made me a better man.",
      author: "Pushpender",
      date: "15-05-2026",
      category: "Awareness",
      readTime: "5 min read",
      image: pushpender,
      content: `
            <h2>Men Need Feminism Too: What I Learned as a Male and a Feminist</h2>
            
            <p>Feminism is not against men; it is about equality.</p>
            
            <p>People often react strangely when I call myself a feminist.</p>
            <p>Some laugh. Some assume I’m pretending to impress women. Others think feminism is somehow “anti-men.”</p>
            
            <p>But the truth is simple:</p>
            <p><strong>Feminism made me a better man.</strong></p>
            <p>Not weaker. Not less masculine. Just more honest, emotionally healthy, and free.</p>
            
            <p>For years, men have been taught that feminism only benefits women. That it’s a fight against men instead of a fight against unfair systems. But if you actually understand feminism, you realize something important:</p>
            
            <p><strong>The same system that limits women also traps men.</strong></p>
            <p>And many men are suffering because of it.</p>

            <h3>The Cage Men Don’t Realize They’re In</h3>
            <p>From childhood, boys are trained with invisible rules:</p>
            <ul>
              <li>Don’t cry.</li>
              <li>Don’t show fear.</li>
              <li>Don’t talk about feelings.</li>
              <li>Be dominant.</li>
              <li>Earn more.</li>
              <li>Be tough all the time.</li>
              <li>“Man up.”</li>
            </ul>
            <p>At first, these sound harmless. Even motivating.</p>
            <p>But over time, they become a prison.</p>
            
            <p>Men grow up emotionally disconnected, unable to express vulnerability without shame. We suppress pain until it becomes anger, loneliness, addiction, or depression.</p>
            <p>Then society asks why men struggle with mental health.</p>
            <p>The answer is right in front of us.</p>
            <p>We were taught survival, not emotional intelligence.</p>
            
            <p>Feminism challenges these toxic expectations. It says men do not have to perform masculinity every second of their lives to deserve respect.</p>
            <p>That idea alone can save lives.</p>

            <h3>Feminism Gives Men Emotional Freedom</h3>
            <p>One of the biggest lies men are told is that emotions are weakness.</p>
            <p>But emotions ignored do not disappear. They come out differently:</p>
            <ul>
              <li>Rage</li>
              <li>Insecurity</li>
              <li>Emotional numbness</li>
              <li>Violence</li>
              <li>Isolation</li>
            </ul>
            <p>Feminism encourages emotional openness, communication, empathy, and self-awareness. These are not “feminine” traits. They are human traits.</p>
            
            <p>A man who can communicate honestly:</p>
            <ul>
              <li>Has healthier relationships</li>
              <li>Becomes a better father</li>
              <li>Handles conflict better</li>
              <li>Understands himself more deeply</li>
            </ul>
            <p>That is strength.</p>
            <p>Not emotional suppression.</p>

            <h3>Feminism Improves Relationships</h3>
            <p>A lot of men complain that relationships today are harder.</p>
            <p>But many still expect women to:</p>
            <ul>
              <li>Do emotional labor</li>
              <li>Tolerate poor communication</li>
              <li>Sacrifice careers</li>
              <li>Handle household work alone</li>
              <li>Accept controlling behavior as “care”</li>
            </ul>
            <p>Modern women no longer want partnerships built on inequality.</p>
            <p>And honestly, they shouldn’t.</p>
            
            <p>Feminism teaches men partnership instead of dominance.</p>
            <p>It teaches:</p>
            <ul>
              <li>Mutual respect</li>
              <li>Consent</li>
              <li>Shared responsibility</li>
              <li>Listening</li>
              <li>Accountability</li>
            </ul>
            <p>The result?</p>
            <p>Healthier relationship.</p>
            <p>Not power struggles.</p>

            <h3>Feminism Helps Men Escape Toxic Masculinity</h3>
            <p>“Toxic masculinity” does not mean masculinity itself is toxic.</p>
            <p>It refers to harmful expectations forced onto men:</p>
            <ul>
              <li>Aggression over empathy</li>
              <li>Dominance over cooperation</li>
              <li>Silence over vulnerability</li>
              <li>Ego over growth</li>
            </ul>
            <p>Many men are exhausted trying to live up to impossible standards.</p>
            <p>You must be successful but never stressed.</p>
            <p>Confident but never emotional.</p>
            <p>Strong but never soft.</p>
            
            <p>Feminism questions these pressures instead of glorifying them.</p>
            <p>It gives men permission to be fully human.</p>

            <h3>Men Also Benefit From Gender Equality</h3>
            <p>Think about it practically.</p>
            <p>When women gain equal opportunities:</p>
            <ul>
              <li>Families become financially stronger</li>
              <li>Parenting responsibilities become shared</li>
              <li>Men face less pressure to be sole providers</li>
              <li>Relationships become partnerships instead of burdens</li>
            </ul>
            <p>Even workplaces improve when empathy, flexibility, and inclusion become normal.</p>
            <p>Gender equality is not a loss for men.</p>
            <p>It is progress for society.</p>

            <h3>Being a Feminist Does Not Mean Hating Men</h3>
            <p>This is where many people misunderstand feminism.</p>
            <p>Holding men accountable is not hatred.</p>
            <p>Wanting women to feel safe is not anti-men.</p>
            <p>Questioning harmful traditions is not a weakness.</p>
            
            <p>Being a feminist simply means:</p>
            <ul>
              <li>Believing women deserve equal respect</li>
              <li>Recognizing unfair systems</li>
              <li>Supporting healthier masculinity</li>
              <li>Choosing empathy over ego</li>
            </ul>
            <p>That should not be controversial.</p>

            <h3>Final Thoughts</h3>
            <p>Feminism did not take anything away from me.</p>
            <p>It gave me freedom:</p>
            <ul>
              <li>Freedom from fake toughness</li>
              <li>Freedom from emotional isolation</li>
              <li>Freedom from outdated expectations</li>
              <li>Freedom to become a more complete person</li>
            </ul>
            <p>A strong man is not the one who dominates others.</p>
            <p>A strong man is the one secure enough to respect equality, express emotions honestly, and grow beyond harmful conditioning.</p>
            
            <p>Men do not lose from feminism.</p>
            <p>We heal through it.</p>
      `
    },
    {
      id: 8,
      title: "Patriarchy’s Impact Beyond Women: Its Effects on Men",
      excerpt: "While women remain the primary sufferers of patriarchal structures, patriarchy also places restrictive and harmful expectations on men. Understanding these pressures is a necessary part of the pursuit of gender equality.",
      author: "Gender Cell IIT Kanpur",
      date: "11-04-2026",
      category: "Awareness",
      readTime: "6 min read",
      image: image,
      content: `
            <h2>Patriarchy’s Impact Beyond Women: Its Effects on Men</h2>

            <p>Conversations around gender justice often—and rightly—focus on the challenges faced by women and marginalized genders. Of course, women remain the primary and most affected sufferers of patriarchal structures. However, an important part of this conversation is understanding how patriarchy also places restrictive and harmful expectations on men. Recognizing this does not undermine women’s rights; instead, it helps build a more inclusive and honest dialogue on <strong>gender equality</strong>.</p>

            <p>Patriarchy is often seen as a system that benefits men, and in many ways it does. However, it is important to recognize that not all men experience it as <strong>power</strong>—many also experience it as <strong>pressure</strong>. In fact, many men unknowingly support patriarchal norms without fully understanding how these same norms shape and limit their own lives.</p>

            <h3>Emotional Suppression and Mental Health</h3>
            <p>From a young age, many men grow up hearing phrases like <strong>“मर्द नहीं रोते”</strong>, <strong>“मर्द को दर्द नहीं होता”</strong>, and <strong>“जो मजबूत नहीं, वो मर्द नहीं”</strong>. These messages discourage <strong>emotional expression</strong> and teach boys to hide <strong>vulnerability</strong>.</p>
            <p>What often goes unsaid is how men are expected to cope with pain, fear, or failure. No one teaches them how to articulate emotions, ask for help, or seek comfort. Over time, this <strong>emotional suppression</strong> can lead to stress, anger, isolation, and untreated <strong>mental health</strong> concerns.</p>

            <h3>The Pressure to Be the Provider</h3>
            <p>Patriarchal norms often link a man’s worth to his <strong>financial success</strong> and <strong>professional stability</strong>. When academic struggles, unemployment, or career uncertainty arise, men may internalize shame and self-doubt.</p>
            <p><strong>Responsibility</strong> itself is not the problem. The issue is that responsibility is placed on men without adequate emotional support or social understanding.</p>

            <h3>Stigma Around Seeking Help</h3>
            <p>Many men hesitate to report harassment, bullying, or mental health struggles. They fear being judged, ridiculed, or not taken seriously. As a result, <strong>silence</strong> becomes a coping mechanism.</p>
            <p>This silence does not indicate the absence of harm—it reflects the presence of <strong>stigma</strong>.</p>

            <h3>No One Taught Men How to Express Care</h3>
            <p>Men are rarely taught how to <strong>express affection</strong>, <strong>nurture relationships</strong>, or <strong>communicate emotional needs</strong>. They are often expected to “just know” how to care for loved ones, while simultaneously being discouraged from emotional openness.</p>
            <p>As a result, men may appear distant or emotionally unavailable—not because they do not care, but because they were never taught the language of emotional expression.</p>

            <h3>Confusion Around Communication and Boundaries</h3>
            <p>Another overlooked issue is that many men are never clearly taught how to <strong>communicate respectfully</strong> with women—what is appropriate, what crosses <strong>boundaries</strong>, and how to express friendliness without discomfort.</p>
            <p>Without guidance, some men become overly cautious and withdrawn, while others unintentionally say things that may feel uncomfortable. This highlights the need for education, dialogue, and mutual learning rather than blame.</p>

            <h3>The Expectation to Always Be Strong and in Control</h3>
            <p>Men are often expected to lead, decide, and remain composed at all times. While responsibility can be empowering, the constant <strong>pressure to appear strong</strong> leaves little room for vulnerability.</p>
            <p>This expectation can affect personal relationships, academic life, and emotional well-being, limiting honest communication and connection.</p>

            <h3>Why This Conversation Matters</h3>
            <p>Acknowledging how patriarchy affects men does not take attention away from women’s struggles. Instead, it helps us recognize that rigid gender norms harm everyone in different ways.</p>
            <p>Addressing these pressures is therefore not separate from the pursuit of <strong>gender equality</strong>—it is a necessary part of it. Creating space for men to express emotions, seek support, and question rigid gender roles ultimately contributes to healthier relationships and more equitable social structures.</p>

            <h3>Conclusion</h3>
            <p>By recognizing how patriarchy shapes the lives of both women and men, we move closer to a society where <strong>dignity</strong>, <strong>respect</strong>, and <strong>emotional freedom</strong> are possible for all.</p>
      `
    },
    {
      id: 7,
      title: "Understanding the POSH Act, 2013\n\nCreating Safe and Respectful Workplaces",
      excerpt: "Sexual harassment is not just a personal issue—it is a violation of dignity and equality. This article explains the POSH Act, 2013, its scope, implementation, and why it is essential for creating safer and more respectful workplaces.",
      author: "Jyoti Srivastava, Gender Cell IIT Kanpur",
      date: "06-01-2026",
      category: "Awareness",
      readTime: "6 min read",
      image: jyoti, // replace with actual imported image variable
      content: `
            <h2>Understanding the POSH Act, 2013</h2>
            <h3>Creating Safe and Respectful Workplaces</h3>
    
            <p>Sexual harassment at the workplace is not just a personal issue—it is a serious violation of dignity, equality, and the right to work in a safe environment.</p>
    
            <p>In India, the <strong>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong>, commonly known as the <strong>POSH Act</strong>, was enacted to address this concern and ensure safer workplaces for women.</p>
    
            <p>This blog explains what the POSH Act is, why it is important, and how it functions in practice.</p>
    
            <h3>What is the POSH Act?</h3>
            <p>The POSH Act was introduced to provide protection against sexual harassment of women at the workplace and to lay down a mechanism for the prevention, prohibition, and redressal of complaints.</p>
    
            <p>The Act came into force on <strong>9 December 2013</strong>, following the Supreme Court’s <strong>Vishaka Guidelines (1997)</strong>, which recognized sexual harassment as a violation of fundamental rights under Articles 14, 15, and 21 of the Indian Constitution.</p>
    
            <h3>Who is Covered Under the POSH Act?</h3>
            <p>The POSH Act has a wide scope and applies to women:</p>
            <ul>
              <li>Of any age, whether employed or not</li>
              <li>Full-time, part-time, temporary, contractual, or ad-hoc employees</li>
              <li>Interns, trainees, apprentices, and volunteers</li>
              <li>Domestic workers</li>
              <li>Visitors or clients at a workplace</li>
            </ul>
    
            <h3>What is a “Workplace”?</h3>
            <p>The definition of workplace is broad and includes:</p>
            <ul>
              <li>Offices, institutions, factories, and organizations</li>
              <li>Educational institutions</li>
              <li>Hospitals and healthcare facilities</li>
              <li>Sports institutes and training centers</li>
              <li>Any place visited during the course of employment</li>
              <li>Transportation provided by the employer</li>
            </ul>
            <p>This ensures protection even beyond the physical office space.</p>
    
            <h3>What Constitutes Sexual Harassment?</h3>
            <p>Under the POSH Act, sexual harassment includes any unwelcome act or behavior, whether directly or indirectly, such as:</p>
            <ul>
              <li>Physical contact and advances</li>
              <li>Demand or request for sexual favors</li>
              <li>Making sexually colored remarks</li>
              <li>Showing pornography</li>
              <li>Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature</li>
            </ul>
            <p><strong>Unwelcome behavior</strong> is the key factor—not intention.</p>
    
            <h3>Internal Committee (IC): The Core of POSH Implementation</h3>
            <p>Every organization with <strong>10 or more employees</strong> is required to constitute an Internal Committee (IC).</p>
    
            <h4>Composition of the Internal Committee</h4>
            <ul>
              <li>A Presiding Officer (a senior woman employee)</li>
              <li>At least two employee members committed to women’s causes</li>
              <li>One external member from an NGO or association familiar with issues of sexual harassment</li>
            </ul>
            <p>At least <strong>50% of the members must be women</strong>, ensuring gender-sensitive handling of complaints.</p>
    
            <h3>How ICC Works at IITs (Including IIT Kanpur)</h3>
            <p>At IITs, the IC is commonly referred to as the <strong>Internal Complaints Committee (ICC)</strong>. The ICC functions as the primary body to receive and address complaints of sexual harassment involving students, staff, faculty, or any campus visitor.</p>
    
            <ul>
              <li>Confidentiality and safety of the complainant are prioritized</li>
              <li>Members include faculty, staff, and student representatives</li>
              <li>Support may be taken from the Gender Cell, counseling services, and campus security</li>
            </ul>
    
            <h3>Filing a Complaint</h3>
            <ul>
              <li>A complaint should be filed within <strong>3 months</strong> of the incident (extendable in certain cases)</li>
              <li>Complaints can be made in writing or with assistance from the IC</li>
              <li>If the aggrieved person is unable to file due to physical or mental incapacity, a legal heir or prescribed person may do so</li>
            </ul>
    
            <h3>Confidentiality</h3>
            <p>The POSH Act strictly mandates confidentiality. Details of the complaint, identities of parties, and proceedings cannot be disclosed, ensuring privacy and protection from retaliation.</p>
    
            <h3>Inquiry and Redressal Process</h3>
            <ul>
              <li>The IC conducts a fair and unbiased inquiry</li>
              <li>Both parties are given an opportunity to be heard</li>
              <li>The inquiry must be completed within <strong>90 days</strong></li>
              <li>The employer must act on the report within <strong>60 days</strong></li>
            </ul>
    
            <h4>Possible Outcomes</h4>
            <ul>
              <li>Disciplinary action against the respondent</li>
              <li>Written apology, warning, or counseling</li>
              <li>Deduction from salary as compensation</li>
              <li>Termination, depending on severity</li>
            </ul>
            <p>The Act also safeguards against false or malicious complaints, while ensuring that inability to prove a complaint does not automatically imply malice.</p>
    
            <h3>Duties of the Employer</h3>
            <ul>
              <li>Creating and communicating a POSH policy</li>
              <li>Constituting the Internal Committee</li>
              <li>Conducting regular awareness and sensitization programs</li>
              <li>Providing a safe working environment</li>
              <li>Assisting the IC during inquiries</li>
              <li>Submitting annual reports to authorities</li>
            </ul>
            <p>Non-compliance can lead to penalties, cancellation of licenses, or withdrawal of government benefits.</p>
    
            <h3>Gender Cell at IITs (Including IIT Kanpur)</h3>
            <p>In addition to the ICC, IITs often have a <strong>Gender Cell</strong> that works to promote gender equality and create a safer campus environment.</p>
    
            <ul>
              <li>Conducting gender sensitization workshops</li>
              <li>Helping students and staff understand POSH rights and procedures</li>
              <li>Acting as a first point of contact for those unsure about filing complaints</li>
              <li>Coordinating with ICC, counseling services, and campus security</li>
            </ul>
    
            <h3>Why the POSH Act Matters</h3>
            <ul>
              <li>Builds respectful and inclusive workplaces</li>
              <li>Empowers women to speak up without fear</li>
              <li>Promotes gender equality</li>
              <li>Improves organizational culture and productivity</li>
            </ul>
    
            <h3>Conclusion</h3>
            <p>The POSH Act is a powerful tool that upholds the dignity and rights of women at the workplace.</p>
            <p>Awareness, proper implementation, and collective responsibility are key to its success.</p>
            <p><strong>Creating a harassment-free environment is not optional. It is essential.</strong></p>
      `
    }, {
      id: 6,
      title: "From Bystander to Upstander: How You Can Intervene",
      excerpt: "We’ve all witnessed moments that felt wrong but chose silence. This piece explains how small, safe actions can turn passive bystanders into upstanders who actively stop harassment.",
      author: "Vatsal, Gender Cell IIT Kanpur",
      date: "06-01-2026",
      category: "Awareness",
      readTime: "5 min read",
      image: vatsal, // replace with actual imported image variable
      content: `
        <h2>From Bystander to Upstander: How You Can Intervene</h2>
        <h3>Small, Safe Actions That Can Stop Harassment Before It Escalates</h3>

        <p>We’ve all been there—witnessing something uncomfortable, maybe even outright wrong, but freezing instead of acting.</p>

        <p>It could be a friend making a creepy “joke,” someone getting too touchy at a pronite, or a comment that crossed a line. You knew it wasn’t okay, but you didn’t know what to do. Or worse, you thought, <em>Someone else will handle it.</em></p>

        <p>But silence helps no one. Waiting for someone else to step in only allows harassment to continue.</p>

        <p>This is where the idea of <strong>bystander vs. upstander</strong> comes in. A bystander watches. An upstander acts. And the good news? You don’t need to be a hero to make a difference.</p>

        <p>Small, smart actions can shut down harassment before it escalates.</p>

        <h3>1. First, Recognize What Harassment Looks Like</h3>
        <p>Harassment doesn’t always look dramatic or obvious.</p>
        <p>It can be subtle—unwanted touches, uncomfortable remarks, persistent jokes, or invading someone’s personal space.</p>
        <p>A simple way to recognize it is to ask yourself:</p>
        <ul>
          <li>Would I feel comfortable if this happened to me?</li>
          <li>Would I be okay if this happened to someone close to me?</li>
        </ul>
        <p>If your gut says something isn’t right, it probably isn’t.</p>

        <h3>2. Why Don’t We Intervene? (The Bystander Effect)</h3>
        <p>Ever noticed how something wrong happens in a crowd, but no one steps in?</p>
        <p>This is called the <strong>bystander effect</strong>—the more people present, the less likely anyone is to act.</p>
        <p>We often tell ourselves:</p>
        <ul>
          <li>“Maybe it’s not that serious.”</li>
          <li>“What if I make things worse?”</li>
          <li>“Someone else will handle it.”</li>
        </ul>
        <p>But harassers rely on this hesitation. Silence gives them permission.</p>

        <h3>3. How to Intervene — Safely & Smartly</h3>
        <p>You don’t have to start a confrontation to help. Here are effective and safe ways to step in:</p>

        <h4>Distract</h4>
        <p>Divert the situation casually. For example: “Hey, can you help me with something real quick?” This creates an exit for the person.</p>

        <h4>Delegate</h4>
        <p>If you’re uncomfortable intervening directly, find someone who can—friends, seniors, professors, or security guards.</p>

        <h4>Document (If Safe)</h4>
        <p>If it’s safe to do so, take photos or videos as evidence. Never risk your safety to document.</p>

        <h4>Delay Support</h4>
        <p>If you couldn’t act in the moment, check in later. Ask the person if they’re okay and if they need help or guidance.</p>

        <h4>Direct Action (If Safe)</h4>
        <p>Clearly call out the behavior and state that it’s wrong. Let the harasser know they will be reported if it continues.</p>

        <h4>Report</h4>
        <p>Most importantly, report the incident to the Gender Cell or ICC immediately. Informers can remain anonymous.</p>

        <h3>4. “But What If…?” — Common Fears</h3>

        <p><strong>“What if the harasser is my friend?”</strong><br />
        Then they especially need to hear it. Real friends don’t harass people.</p>

        <p><strong>“What if they turn on me?”</strong><br />
        Your safety comes first. Use distraction or get help instead of confronting directly.</p>

        <p><strong>“What if I’m overreacting?”</strong><br />
        It’s always better to act than to let someone get hurt.</p>

        <h3>You Have More Power Than You Think</h3>
        <p>You don’t need to be perfect. You don’t need to be fearless.</p>
        <p>You just need to be willing to do <em>something</em>.</p>

        <p>Next time you see something off, ask yourself:</p>
        <p><strong>“If not me, who? If not now, when?”</strong></p>

        <p>Be the person you’d want by your side. Let’s build a culture of upstanders.</p>

        <p><strong>Need help?</strong> The Gender Cell and ICC are here. DM us, email us, or drop by — we’ve got your back.</p>
  `
    },
    {
      id: 5,
      title: "Understanding Cyberbullying and Cyber Harassment: A Growing Digital Threat",
      excerpt: "In today’s hyperconnected world, online spaces have become an integral part of our identity — but they also expose us to harmful behaviours such as cyberbullying and cyber harassment.",
      author: "Aradhana, Gender Cell IIT Kanpur",
      date: "5th December, 2025",
      category: "Awareness",
      readTime: "6 min read",
      image: aradhna,
      content: `
        <h2>Understanding Cyberbullying and Cyber Harassment: A Growing Digital Threat</h2>
        <h3>Recognizing and Responding to Online Abuse in a Hyperconnected World</h3>

        <p>In today’s hyperconnected world, our phones and laptops have become extensions of our identity. While the internet offers opportunities to learn, connect, and express ourselves, it also opens doors to harmful behaviors. Among the most damaging of these are cyberbullying and cyber harassment—digital acts that can leave deep emotional, psychological, and sometimes even physical consequences.</p>

        <p>This blog breaks down common forms of online abuse, how they affect individuals, and why it's essential for all of us to recognize and report them.</p>

        <h3>What Is Cyberbullying and Cyber Harassment?</h3>
        <p>Cyberbullying and cyber harassment refer to any online behavior — intentional or unintentional — that causes emotional distress, humiliation, fear, or discomfort to another person.</p>
        <p>It includes repeated or harmful acts such as stalking, sharing embarrassing content, spreading false information, making threats, or forcing someone to share personal details.</p>
        <p>It can occur on social media, messaging apps, email, gaming platforms, or any space where people interact online.</p>

        <h3>Forms of Cyberbullying and Cyber Harassment</h3>
        <p>Below are some of the most common and harmful behaviors seen today:</p>

        <h4>1. Stalking</h4>
        <p>Online stalking involves continuously following someone’s digital activity without consent. This can include obsessively checking someone’s posts, watching their online status, tracking their location through apps, sending continuous follow or message requests even when the person is clearly avoiding it, or repeatedly contacting them even after they ask you to stop.</p>
        <p>While it may seem harmless at first, it can escalate quickly and is considered a serious form of harassment.</p>

        <h4>2. Forcibly Asking for Instagram IDs or Personal Details</h4>
        <p>Pressuring someone to share their social media account, phone number, location, or private photos is another form of online harassment.</p>
        <p>Consent is essential—no one is obligated to reveal personal details.</p>
        <p>This behavior often leads to further stalking, blackmail, or unwanted messages. It’s important to say no and report such requests.</p>

        <h4>3. Sharing Messages, Memes, or Content That Make Others Uncomfortable</h4>
        <p>Sometimes harassment is subtle.</p>
        <p>Forwarding memes, screenshots, jokes, or edited photos that make someone uncomfortable falls under online bullying.</p>
        <p>Taking images from their social media and resharing, editing, or mocking them violates their privacy and can cause emotional harm. Even if someone says, “It was just for fun,” the impact can be deeply hurtful. Humor should never come at the cost of another person’s dignity.</p>

        <h4>4. Posting Vulgar Messages, Derogatory Comments, or Sexually Explicit Images</h4>
        <p>This is one of the most visible and damaging forms of online abuse.</p>
        <p>Examples include:</p>
        <ul>
            <li>Leaving insulting comments on someone’s posts</li>
            <li>Sending unwanted explicit photos</li>
            <li>Posting sexually suggestive or demeaning content</li>
            <li>Body-shaming or character assassination</li>
        </ul>
        <p>Such actions can shatter a person’s confidence and expose them to public humiliation, leaving a long-lasting emotional impact.</p>

        <h4>5. Spreading Fake Information or Hacking Accounts</h4>
        <p>Posting false information about someone on public forums—whether it’s rumors, manipulated images, or baseless accusations—can ruin reputations.</p>
        <p>Hacking an account is even more serious. It violates someone’s privacy, steals their identity, and can be used to impersonate them or post harmful content on their behalf.</p>
        <p>These actions are illegal.</p>

        <h4>6. Creating Fake Accounts</h4>
        <p>Fake profiles are often created to:</p>
        <ul>
            <li>Harass someone anonymously</li>
            <li>Spread false rumors</li>
            <li>Impersonate a victim</li>
            <li>Obtain personal information</li>
            <li>Stalk or monitor someone</li>
        </ul>
        <p>These accounts give bullies a sense of invisibility, which makes the harassment even more relentless.</p>

        <h3>Why Does This Matter?</h3>
        <p>Cyberbullying doesn’t stay behind the screen.</p>
        <p>It affects:</p>
        <ul>
            <li>Mental health</li>
            <li>Academic and job performance</li>
            <li>Relationships</li>
            <li>Personal safety</li>
            <li>Long-term emotional well-being</li>
        </ul>
        <p>Victims may experience fear, guilt, anxiety, depression, or withdrawal from social spaces.</p>

        <h3>What Can You Do?</h3>
        <p><strong>Speak up:</strong> Report the behavior to Gender Cell or ICC. You can also report the incident anonymously to India’s Cyber Crime Portal (cybercrime.gov.in).</p>
        <p><strong>Document evidence:</strong> Screenshots, messages, links.</p>
        <p><strong>Block and report:</strong> Use platform safety tools.</p>
        <p><strong>Reach out:</strong> Share your experience with friends, mentors, or counselors.</p>
        <p><strong>Respect boundaries:</strong> Never force anyone to share information or interact online.</p>

        <h3>Final Thoughts</h3>
        <p>Cyberbullying and harassment are not “small things.”</p>
        <p>Every harmful message, fake account, or intimidating comment affects a real human being behind the screen.</p>
        <p>By understanding what these behaviors look like and actively standing against them, we create safer digital spaces for everyone.</p>
  `
    }
    , {
      id: 4,
      title: "Creating a Culture of Clear Consent",
      excerpt: "Consent is more than a word—it’s about respect, communication, and safety. This article explains what consent truly means, why it matters on campus, and how the FRIES model helps build a culture where everyone feels safe and empowered.",
      author: "Bhavit Meena, Gender Cell IIT Kanpur",
      date: "6th November, 2025",
      category: "Awareness",
      readTime: "6 min read",
      image: bhavit,
      content: `
        <h2>Creating a Culture of Clear Consent</h2>
        <h3>Creating a culture of clear consent so everyone can learn, live, and belong</h3>

        <p>College should be a place to grow—intellectually, socially, and morally. But when interactions that should be harmless become invasive, they steal safety and opportunity.</p>

        <p>Building a culture of clear consent is essential to ensuring that every member of the campus community feels safe, respected, and valued.</p>

        <h3>What Exactly Is Consent?</h3>
        <p>At its simplest, <strong>consent</strong> means permission given freely and knowingly.</p>

        <p>Consent is about mutual respect and communication. It involves checking in with others and respecting their right to say no—or to change their mind.</p>

        <p>In any type of relationship—romantic, platonic, or professional—consent ensures that everyone feels safe and empowered to make decisions about their bodies, emotions, and boundaries.</p>

        <h3>Why Focus on Consent on Campus?</h3>
        <p>Clear consent is essential to prevent misunderstandings, protect people from unwanted actions, and build trust and respect.</p>

        <p>Without consent, even small actions can cause discomfort, confusion, or harm. Whether it’s a group activity, a social event, or personal interactions, clearly saying “yes” or “no” ensures that everyone knows what is okay.</p>

        <p>A campus that values consent is a campus where everyone feels safe, included, and respected.</p>

        <h3>The FRIES Model of Consent</h3>
        <p>A useful way to understand consent is through the <strong>FRIES model</strong>, developed by Planned Parenthood:</p>

        <h4>F – Freely Given</h4>
        <p>Consent must be given voluntarily, without manipulation, pressure, threats, or intoxication.</p>
        <p><em>Example:</em> If someone is pressured into a relationship by a colleague, senior, or supervisor in exchange for grades or job opportunities, that is not valid consent.</p>

        <h4>R – Reversible</h4>
        <p>Anyone can change their mind at any time. Consent is ongoing.</p>
        <p><em>Example:</em> Someone agrees to a kiss but halfway through says “stop.” Their choice must be respected immediately.</p>

        <h4>I – Informed</h4>
        <p>All parties must have full information before giving consent. Misleading or hiding facts makes consent invalid.</p>
        <p><em>Example:</em> If you ask someone for consent to kiss but then start hugging them instead, that consent is not informed.</p>

        <h4>E – Enthusiastic</h4>
        <p>Consent should come from genuine willingness, not reluctant agreement.</p>
        <p><em>Example:</em> Silence, hesitation, or avoidance is not consent. Only a clear and willing “yes” counts.</p>

        <h4>S – Specific</h4>
        <p>Saying yes to one activity does not mean yes to everything. Each act needs separate consent.</p>
        <p><em>Example:</em> Agreeing to hold hands does not mean agreeing to hug. Each step requires agreement.</p>

        <p>The FRIES model reminds us that consent is not a formality—it is about respect, communication, and empathy.</p>

        <h3>Practical Steps for a Consent-Friendly Campus</h3>

        <ul>
          <li><strong>Ask clearly and listen carefully:</strong> Always ask direct questions. If someone hesitates or seems unsure, stop.</li>
          <li><strong>Respect boundaries and power differences:</strong> If you hold authority, be extra cautious. Never ask for favors in exchange for grades, opportunities, or social benefits.</li>
          <li><strong>Always feel free to say “No”:</strong> Saying no is your right. You can change your mind at any time and you don’t owe an explanation.</li>
          <li><strong>Keep evidence if needed:</strong> Save messages, screenshots, dates, times, and witness details if non-consensual behavior occurs.</li>
        </ul>

        <h3>Reporting Consent Violations</h3>
        <p>If someone violates your consent, report it through proper campus channels such as the <strong>Internal Complaints Committee (ICC)</strong> or the <strong>Gender Cell</strong>.</p>

        <p>Reporting helps ensure accountability and prevents harm from continuing.</p>

        <h3>Conclusion</h3>
        <p>Consent may seem simple in theory, but it can be complicated in practice.</p>

        <p>Change starts with asking direct questions, respecting answers, and supporting a culture that prioritizes safety and respect.</p>

        <p>When individuals act responsibly, institutions provide clear support, and harmful behaviors are not tolerated, campuses become places where everyone can truly learn, live, and belong.</p>

        <p><strong>Even small actions can make a big difference.</strong></p>
  `
    }, {
      id: 3,
      title: "Understanding The Harassment In College",
      excerpt: "College is meant to be a space to learn and grow — not a place where anyone feels unsafe or unheard. Yet harassment remains one of the most ignored issues on campuses.",
      author: "Parul Parmar, Gender Cell IIT Kanpur",
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
    }, {
      id: 2,
      title: "The Gender Lens: Seeing What We Miss",
      excerpt: "Bias doesn’t always arrive with insults or discrimination. It’s often hidden in the way we give compliments, divide responsibilities, or make casual remarks.",
      author: "Sonal, Gender Cell IIT Kanpur",
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
    }, {
      id: 1,
      title: "It’s not about intention, it’s about impact",
      excerpt: "Sexual harassment often occurs not because someone intends harm but because they fail to understand the impact of their actions. That’s why understanding the impact over intention is so important, especially in the context of gender sensitivity.",
      author: "Snehlata Rao, Gender Cell IIT Kanpur",
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