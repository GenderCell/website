
import Faqs from "../components/Faqs/Faqs";
import '../css/Resources.css'
import BannerCard from '../components/Card/BannerCard';

function Resources() {
  const title = "Resources";
  const description = "A collection of resources to help students at IIT Kanpur.";
  const buttons = [
      { label: "Mandate", sectionId: "mandate" },
      { label: "Understanding Harassment", sectionId: "understanding-harassment" },
      { label: "Laws and Acts", sectionId: "laws" },
      { label: "IITK Policies", sectionId: "iit-policies" },
      { label: "Other Institue Policies", sectionId: "other-policies" },
      { label: "Articles and reports", sectionId: "articles-reports" },
      { label: "Judgements and orders", sectionId: "judgements-orders" },
      { label: "FAQS", sectionId: "faqs" },
  ];
  return (
    <div className="App1">
      <BannerCard title={title} description={description} buttons={buttons}/>
      <section id="mandate" className='section'>
        <h2 className='bold'>Mandate</h2>
        <p>
          <br />
          IIT Kanpur endeavours to create a sustainable, equal-opportunity environment conducive to an all-round
          development of women members of the campus community, both professionally and personally. The institute
          constantly strives to ensure that women from all walks of life, residing in or visiting the campus, are
          treated with respect and dignity. It is committed to making the campus-environment safe for women – free from
          exploitation, harassment, and violence of any nature.
        </p>
        <p>
          The Women's Cell of IIT Kanpur was constituted in accordance with the{' '}
          <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf"  className='link1'>
            Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013
          </a>
          . The Cell's mandate includes sensitizing the community towards gender-related issues, and in this regard,
        </p>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }}>
          <li>
            <p>organizing orientation programs for new students and employees,</p>
          </li>
          <li>
            <p>conducting workshops and open houses for various sections of the community.</p>
          </li>
        </ul>
        <p>The Cell also advises on available courses of action to women on campus who may be in distress.</p>
        <p>
          <strong>Mandate of the Women's Cell:</strong> a{' '}
          <a href="https://www.iitk.ac.in/wc/data/Mandate_revised-18-11-19.pdf" target="_blank" className='link1'>
            link
          </a>{' '}
          to the office order.
        </p>
        <p>The Cell draws members from students, staff, and faculty, and is equally represented by women and men.</p>
      </section>

      <section id="understanding-harassment" className='section'>
        <h2 className='bold'>Understanding Sexual Harassment</h2>
        <p>
          <br /> <strong>What is sexual harassment?</strong>
        </p>
        <p>
          <em>
            <br />
            Unwelcome
          </em>{' '}
          acts or behavior with sexual undertones (whether directly or by implication) including
        </p>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }}>
          <li>
            <p>physical contact and advances</p>
          </li>
          <li>
            <p>a demand or request for sexual favors</p>
          </li>
          <li>
            <p>making sexually colored remarks</p>
          </li>
          <li>
            <p>showing pornography</p>
          </li>
          <li>
            <p>any other unwelcome physical, verbal, or non-verbal conduct of sexual nature</p>
          </li>
        </ul>
        <p>
          These are criminal offenses (
          <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf" target="_blank" className='link1'>
            link
          </a>
          ).
          <br />
          <br /> <strong>Power of position may be abused by perpetrators of sexual harassment through</strong>
        </p>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }} >
          <li>
            <p>implied or explicit promise of preferential treatment</p>
          </li>
          <li>
            <p>implied or explicit threat of detrimental treatment</p>
          </li>
          <li>
            <p>creating an offensive work-environment</p>
          </li>
        </ul>
        <p>
          These are criminal offenses (
          <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf" target="_blank" className='link1'>
            link
          </a>
          ).
        
          <br /> <br /> <strong>Some other criminal offenses</strong> <br />
          <br />
          Apart from the grave criminal offense of <em>Rape</em>, following acts are also punishable under law:
        </p>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }}>
          <li>
            <p>
              <em>Voyeurism</em>: watching or capturing an image of a woman engaged in a private act (
              <a href="https://www.iitk.ac.in/wc/data/TheCriminalLaw.pdf" target="_blank" className='link1' style={{ paddingRight: '0px' }}>
                link
              </a>
              )
            </p>
          </li>
          <li>
            <p>
              <em>Stalking</em>: following a woman, contacting (or attempting to contact) a woman despite a clear
              indication of disinterest by the woman; monitoring the use of the internet by a woman (
              <a href="https://www.iitk.ac.in/wc/data/TheCriminalLaw.pdf" target="_blank" style={{ paddingRight: '0px' }} className='link1'>
                link
              </a>
              )
            </p>
          </li>
          <li>
            <p>
              <em>Exhibitionism</em>: Word, gesture or act intended to insult the modesty of a woman (
              <a href="https://www.iitk.ac.in/wc/data/TheCriminalLaw.pdf" target="_blank" style={{ paddingRight: '0px' }} className='link1'>
                IPC Section 509 - link
              </a>
              )
            </p>
          </li>
        </ul>
        <p>
          <em>
            <strong>
              Apart from heavy penal consequences, these acts may lead to academic termination, or suspension from
              service.
            </strong>
          </em>
        </p>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }}>
          <li style={{ listStyle: 'square', color: 'red' }}>
            <p>
              <strong>
                IIT Kanpur has put in place a gender neutral policy on Prevention, Prohibition and Redressal of Sexual
                Harassment of Students (
                <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/iitk-guidelines.pdf" target="_blank" style={{ fontWeight: 'bold', paddingRight: '0px' }} className='link1'>
                  link
                </a>
                )
              </strong>
            </p>
          </li>
        </ul>
      </section>

      <section id="laws" className='section'>
        <h2 className='bold'>Laws, Acts, and the Constitution</h2>
        <h3 className='bold1'>
            The Sexual Harassment of Women at Workplace Act, 2013
          <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf" className='link1'>
          (link)
          </a>
        </h3>
        <p>
          Defines sexual harassment, makes perpetrators and institutions accountable, and mandates a complaint
          redressal mechanism: the Internal Complaints Committee (
          <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/" className='link1'>links</a>).
        </p>
        <p>
          Link to <a href="https://www.iitk.ac.in/wc/data/CCS_CONDUCT_RULES.pdf" className='link1'>CCS conduct rules</a> and{' '}
          <a href="https://www.iitk.ac.in/wc/data/Rules_Sexual-Harassment-at-Workplace.pdf" className='link1'>Rules</a> for The Sexual
          Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.
        </p>
        <h3>
          <a href="https://www.iitk.ac.in/wc/data/TheCriminalLaw.pdf" className='link1'>The Criminal Law (Amendment) Act, 2013</a>
        </h3>
        <p>Identifies sexual harassment as a criminal offense, and recognizes voyeurism and stalking as criminal offenses.</p>
        <h3>The Constitution of India</h3>
        <p>
          Guarantees fundamental rights for equality, freedom, and safety through Articles 14, 15, 16, 19(1)(g), and 21 (
          <a href="https://www.iitk.ac.in/wc/data/coi-4March2016.pdf" className='link1'> link</a>).
        </p>
      </section>
      <div className="combine">
      <section id="iit-policies" className='section'>
        <h2 className='bold'>IIT Kanpur Policies and Rules</h2>
        <h3>
          Prevention, Prohibition, and Redressal of Sexual Harassment of Students Rules, 2017 (
          <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/iitk-guidelines.pdf" className='link1'>link</a> )
        </h3>
        <p>Rules and policies aimed at preventing and addressing sexual harassment among students.</p>
        <h3>Policy on Romantic or Sexual Relationships</h3>
        <p>Guidelines for relationships between individuals in positions of authority and students/employees.</p>
        <h3>Other Relevant Documents</h3>
        <ul style={{ paddingLeft: '50px', listStyle:"inherit" }}>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/IPC_186045.pdf" className='link1'>The Indian Penal Code</a>
          </li>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/UGC_regulations-harassment.pdf" className='link1'>UGC Regulations 2015</a>
          </li>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/VishakaGuidelines_UPmahilaayog.pdf" className='link1'>Vishaka Guidelines</a>
          </li>
        </ul>
      </section>

      <section id="other-policies" className='section'>
        <h2 className='bold'>Policies of Other Educational Institutes</h2>
        <ul>
          <li>
            <a href="https://www.gendercell.iitb.ac.in/" className='link1'>IIT Bombay</a>
          </li>
          <li>
            <a href="https://www.tifr.res.in/%7Ewomencell/" className='link1'>TIFR Bombay</a>
          </li>
          <li>
            <a href="https://www.iiserpune.ac.in/events/513/programme-on-women-s-safety" className='link1'>IISER Pune</a>
          </li>
          <li>
            <a href="" className='link1'>JNU</a>
          </li>
          <li>
            <a href="" className='link1'>Delhi University</a>
          </li>
          <li>
            <a href="https://share.princeton.edu/" className='link1'>Princeton University</a>
          </li>
          <li>
            <a href="https://www.fas.harvard.edu/sexual-gender-based-harassment-policyresources" className='link1'>Harvard University</a>
          </li>
          <li>
            <a href="https://sexualrespect.columbia.edu/" className='link1'>Columbia University</a>
          </li>
          <li>
            <a href="https://share.stanford.edu/" className='link1'>Stanford University</a>
          </li>
          <li>
            <a href="https://studentmanual.uchicago.edu/page/policy-harassment-discrimination-and-sexual-misconduct/" className='link1'>
              University of Chicago
            </a>
          </li>
        </ul>
      </section>
      </div>
      <div className="combine2">
      <section id="articles-reports" className='articles section' >
        <h2 className='bold'>Articles and Reports</h2>
        <ul>
          <li>
            Beyond Bias and Barriers: Fulfilling the Potential of Women in Academic Science and Engineering{' '}
            <a href="https://nap.nationalacademies.org/catalog/11741/beyond-bias-and-barriers-fulfilling-the-potential-of-women-in" className='link1'>
              Read more
            </a>
          </li>
          <li>
            The World's Women 2015: Trends and Statistics{' '}
            <a href="https://unstats.un.org/unsd/gender/worldswomen.html" className='link1'>Read more</a>
          </li>
          <li>
            Incidents of Sexual Harassment at Educational Institutes in India{' '}
            <a href="http://www.ijramr.com/sites/default/files/issues-pdf/148.pdf" className='link1'>Read more</a>
          </li>
          <li>
            Perceptions of the Work Environment: The Issue of Gender in Indian Scientific Research Institutes{' '}
            <a href="https://journals.sagepub.com/doi/abs/10.1177/0971521516656079?journalCode=ijgb" className='link1'>Read more</a>
          </li>
          <li>
            Global Gender Gap Report, 2019{' '}
            <a href="https://www3.weforum.org/docs/WEF_GGGR_2020.pdf" className='link1'>Read more</a>
          </li>
          <li>
            A Global Approach to the Gender Gap in Mathematical, Computing, and Natural Sciences{' '}
            <a href="https://zenodo.org/records/3697223#.XmXmJEplOUk" className='link1'>Read more</a>
          </li>
        </ul>
      </section>

      <section id="judgements-orders" className='judgements section'>
        <h2 className='bold'>Judgements and Orders</h2>
        <ul>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/Judgement%20ADJ.PDF" className='link1'>Judgement ADJ</a>
          </li>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/Judgement%20M.K.%20Lele.PDF" className='link1'>Judgement M.K. Lele</a>
          </li>
          <li>
            <a href="https://www.iitk.ac.in/wc/data/Judgement%20Seema%20Lepcha.PDF" className='link1'>Judgement Seema Lepcha</a>
          </li>
        </ul>
        <p>
          For more details, refer to{' '}
          <a href="https://indiankanoon.org/search/?formInput=sexual%20harassment%20cases" className='link1'>Indian Kanoon</a>.
        </p>
      </section>
      </div>
      <div id="faq" className="faqs">
      <Faqs/>
      </div>
    </div>
  );
}

export default Resources;
