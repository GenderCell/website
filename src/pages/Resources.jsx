
import Faqs from "../components/Faqs/Faqs";
import '../css/Resources.css'
import BannerCard from '../components/Card/BannerCard';
import LinksSection from '../components/Linkscard/LinkCard';
import React, { useState, useEffect } from 'react';
// import ReadMore from "../components/ReadMore";

function Resources() {
  
  const title = "Resources";
  const description = "A collection of resources to help students at IIT Kanpur.";
  const buttons = [
      { label: "Mandate", sectionId: "mandate" },
      { label: "Understanding Harassment", sectionId: "understanding-harassment" },
      {label:"Annual Reports", sectionId:"annual-reports"},
      { label: "Office Orders", sectionId: "office-orders" },
      { label: "Official Documents", sectionId: "official-documents" },
      { label: "Articles, reports and Judgements", sectionId: "articles" },
      { label: "Other Official Documents", sectionId: "other-official-docs" },
      { label: "FAQS", sectionId: "faqs" },
  ];
  const resources = [

    {
      name: "ICC case Correspondence Document (New)",
      author: "ICC IIT Kanpur",
      resourceType: "Document",
      link: "https://docs.google.com/document/d/1T4lHHlAgfsC_DAu7ukZdpVF8ytcCGs_HgWJBoNIvMjA/edit?usp=sharing"
    },{
      name: "The Sexual Harassment of Women at Workplace Act, 2013 (POSH)",
      author: "Ministry of Law and Justice",
      resourceType: "Act",
      link: "https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link"
    },{
      name: "Internal Complaints Committee",
      author: "ICC",
      resourceType: "WEBSITE Link",
      link: "https://website-33w.pages.dev/icc/"
    },{
      name: "CSS Conduct Rules",
      author: "Department of Personnel and Training ",
      resourceType: "Rules",
      link: "https://drive.google.com/file/d/1InAyLMV51J7SBKR2TwQcYQhNmsepdqNu/view "
    },
    {
      name: "Rules for The Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.",
      author: "Department of Women and Child Development",
      resourceType: "Rules",
      link: "https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link"
    },
{
      name: "HANDBOOK on Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
      author: "Department of Women and Child Development",
      resourceType: "Rules",
      link: "https://drive.google.com/file/d/17A1q54ckDjmU4E2hdTAyQ9HgZZ3Q-Iac/view?usp=drive_link"
    },
    {
      name: "The Criminal Law (Amendment) Act, 2013",
      author: "Ministry of Law and Justice",
      resourceType: " Law and Act",
      link: "https://drive.google.com/file/d/1_d55FDziewIlE5BdD0hHpITrb2mT0mug/view?usp=sharing"
    },
    {
      name: "The Constitution of India Guarantees fundamental rights for equality, freedom, and safety through Articles 14, 15, 16, 19(1)(g), and 21",
      author: "Ministry of Women and Child Development",
      resourceType: "Constitution",
      link: "https://drive.google.com/file/d/1rPmIUcMqTQEQs5Tj4u3siiGv8ATrfpak/view?usp=drive_link"
    },{
      name: "Prevention, Prohibition, and Redressal of Sexual Harassment of Students Rules, 2017",
      author: "IIT Kanpur",
      resourceType: "Rules",
      link: "https://drive.google.com/file/d/1d0SVFABd7i2eedQ_W3qwjaa9yVwHJQl-/view?usp=drive_link"
    },{
      name: "IIT Kanpur Policy on Romantic or Sexual Relationships between Individuals in Positions of Authority and Students/Employees of the Institute",
      author: "IIT Kanpur",
      resourceType: "Policy",
      link: "https://drive.google.com/file/d/1T5ZbH-NFuLAJlrK4B8EZUp0ohpdT6M-n/view?usp=drive_link"
    },{
      name: "IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students Rules, 2017",
      author: "IIT Kanpur",
      resourceType: "Rules",
      link: "https://drive.google.com/file/d/1d0SVFABd7i2eedQ_W3qwjaa9yVwHJQl-/view?usp=drive_link"
    },{
      name: "The Indian Penal Code",
      author: "The First Law Commission",
      resourceType: "Handbook",
      link: "https://drive.google.com/file/d/1NzUpkvmnCnzDTZwMyqSlJ6uQbpcVWL20/view?usp=drive_link"
    },{
      name: "UGC Regulations 2015",
      author: "Ministry of Education of India",
      resourceType: "Handbook",
      link: "https://drive.google.com/file/d/1Yrmm3-9rKyadx6fW5WxQ7DUoanx-zi1V/view?usp=drive_link"
    },{
      name: "Vishaka Guidelines against Sexual Harassment at Workplace",
      author: "Hon’ble Supreme Court",
      resourceType: "Handbook",
      link: "https://drive.google.com/file/d/1tZQGs104wLKLBdK6WPMa_CiNW2uRan9X/view?usp=drive_link"
    },{
      name: "UGC Regulations 2015",
      author: "Ministry of Education of India",
      resourceType: "Handbook",
      link: "https://drive.google.com/file/d/1Yrmm3-9rKyadx6fW5WxQ7DUoanx-zi1V/view?usp=drive_link"
    }
  ];
    const articles=[
    {
      name: "Beyond Bias and Barriers: Fulfilling the Potential of Women in Academic Science and Engineering",
      author: "National Academy of Sciences; National Academy of Engineering; Institute of Medicine",
      resourceType: "Articles and Reports",
      link: "https://nap.nationalacademies.org/catalog/11741/beyond-bias-and-barriers-fulfilling-the-potential-of-women-in"
    },
    {
      name: "Report of the Committee on Amendments to Criminal Law",
      author: "Department of  Economics and Social Affairs ",
      resourceType: "Report and Article",
      link: "https://worlds-women-2020-data-undesa.hub.arcgis.com/"
    },
    {
      name: "Anju Thomas, Incidents of Sexual Harassment at Educational Institutes in India: Preventive Measures and Grievance Handling, Review article in Journal of Recent Advances in Multidisciplinary Research, March 2015.",
      author: "Anju Thomas",
      resourceType: "Report and Article",
      link: "https://www.ijramr.com/sites/default/files/issues-pdf/148.pdf"
    },
    {
      name: "Perceptions of the Work Environment: The Issue of Gender in Indian Scientific Research Institutes,",
      author: "Namrata Gupta Indian Journal of Gender Studies, 2016",
      resourceType: "Report and Article",
      link: "https://journals.sagepub.com/doi/abs/10.1177/0971521516656079?journalCode=ijgb"
    },
    {
      name: "Global Gender Gap Report 2020",
      author: "World Economic Forum",
      resourceType: "Report and Article",
      link: "https://www3.weforum.org/docs/WEF_GGGR_2020.pdf"
    },
    {
      name: "A Global Approach to the Gender Gap in Mathematical, Computing, and Natural Sciences. How to Measure It, How to Reduce It?",
      author: "Marie-Françoise Roy et al. International Science Council, 2020",
      resourceType: "Report and Article",
      link: "https://zenodo.org/records/3697223#.XmXmJEplOUk"
    },
    {
      name: "Judgement ADJ",
      author: "ADJ",
      resourceType: "Judgement and Order",
      link: "https://drive.google.com/file/d/10pxaLLd6ELuXmaVCgtV7n_1QmhIpFoar/view?usp=drive_link"
    },
    {
      name: "Judgement M.K. Lele",
      author: " M.K. Lele,",
      resourceType: "Judgement and Order",
      link: "https://drive.google.com/file/d/16LSgDR_HDD8oqaw-W-k62EFc4i1xJ-L3/view?usp=drive_link"
    },
    {
      name: "Judgement Seema Lepcha",
      author: "Seema Lepcha",
      resourceType: "Judgement and Order",
      link:  "https://drive.google.com/file/d/1NkvpHAv9uglw6kUjrXQgoEorCyVibdBs/view?usp=drive_link"
    },
    {
      name: " Judgements and Orders related to Sexual Harassment Case",
      author: "Indian Kanoon",
      resourceType: "Judgement and Order",
      link: "https://indiankanoon.org/search/?formInput=sexual%20harassment%20cases"
    }
  ];

const otherresources = [
  {
    name: "Handbook on combating gender stereotypes",
    author: "Supreme Court of India",
    resourceType: "Handbook",
    link: "https://main.sci.gov.in/pdf/LU/04092023_070741.pdf"
  },
  {
    name: "Handbook On Sexual Harassment of Women at Workplace",
    author: "Ministry of Women and Child Development",
    resourceType: "Handbook",
    link: "https://wcd.nic.in/sites/default/files/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf"
  },
  {
    name: "Report of the Committee on Amendments to Criminal Law",
    author: "Recommendations for amendments to the Criminal Law by Justice J S Verma (retd) Justice Leila Seth (retd) Gopal Subramanium",
    resourceType: "Report/ Ordinance Summary",
    link: "https://prsindia.org/policy/report-summaries/justice-verma-committee-report-summary"
  },
  {
    name: "Convention on the Elimination of All Forms of Discrimination against Women (CEDAW) Dec 1979",
    author: "International treaty adopted in 1979 by the United Nations General Assembly",
    resourceType: "Treaty",
    link: "https://www.ohchr.org/sites/default/files/documents/professionalinterest/cedaw.pdf "
  },
  {
    name: "CONVENTION C190 Convention concerning the elimination of violence and harassment in the world of work",
    author: "International Labour Organization",
    resourceType: "International convention",
    link: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@dcomm/@publ/documents/publication/wcms_721160.pdf"
  },
  {
    name: "Sexual Harassment of Women in Colleges and Universities:Concerns and Solutions 16th November 2017",
    author: "Genderlogue- Women Power Connect, Tata Institute of Social Sciences, Mumbai, Friedrich Ebert Stiftung",
    resourceType: "Report",
    link: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@dcomm/@publ/documents/publication/wcms_721160.pdf"
  },
  {
    name: "Measures for Ensuring the Safety of Women and Programmes for Gender Sensitization on Campuses",
    author: "University Grants Commission",
    resourceType: "Report",
    link: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@dcomm/@publ/documents/publication/wcms_721160.pdf"
  }, 
   {
    name: "Women's Cell - IIT Bombay",
    author: "IIT Bombay",
    resourceType: "Website",
    link: "http://www.iitb.ac.in/womenscell/en"
  },
  {
    name: "Women's Cell - TIFR Bombay",
    author: "Tata Institute of Fundamental Research",
    resourceType: "Website",
    link: "https://www.tifr.res.in/~womencell/"
  },
  {
    name: "Women's Cell - IISER Pune",
    author: "Indian Institute of Science Education and Research Pune",
    resourceType: "Website",
    link: "http://www.iiserpune.ac.in/links/women-s-cell"
  },
  {
    name: "GSCASH - JNU",
    author: "Jawaharlal Nehru University",
    resourceType: "Website",
    link: "http://www.jnu.ac.in/AboutJNU/GSCASH.asp"
  },
  {
    name: "Sexual Harassment Policy - Miranda House, Delhi University",
    author: "Delhi University (Miranda House)",
    resourceType: "PDF Document",
    link: "http://www.mirandahouse.ac.in/mirandahouse/userspace/username/admin/DynamicFolder/2006-2007/WomenDevelopment/SexHarass.pdf"
  },
  {
    name: "Sexual Harassment/Assault Advising, Resources and Education (SHARE)",
    author: "Princeton University",
    resourceType: "Website",
    link: "https://share.princeton.edu/"
  },
  {
    name: "Sexual and Gender-Based Harassment Policy and Resources",
    author: "Harvard University",
    resourceType: "Website",
    link: "http://www.fas.harvard.edu/sexual-gender-based-harassment-policyresources"
  },
  {
    name: "Sexual Respect and Community Standards",
    author: "Columbia University",
    resourceType: "Website",
    link: "https://sexualrespect.columbia.edu/"
  },
  {
    name: "Sexual Harassment Policy - SHARE",
    author: "Stanford University",
    resourceType: "Website",
    link: "https://share.stanford.edu/"
  },
  {
    name: "Policy on Harassment, Discrimination, and Sexual Misconduct",
    author: "University of Chicago",
    resourceType: "Website",
    link: "https://studentmanual.uchicago.edu/page/policy-harassment-discrimination-and-sexual-misconduct"
  },
  {
    name: "National Commission for Women (NCW)",
    author: "Government of India",
    resourceType: "Website",
    link: "https://www.ncw.gov.in/"
  },
];
const annualreports=[
  {
    name: "Annual Report 2023-24",
    author: "Gender Cell IITK",
    resourceType: "Report",
    link: "https://docs.google.com/document/d/1Jd98NrFyLzcg0Xa9wdO7_LsWlrHJxzS9/edit?usp=drivesdk&ouid=117882615103267759421&rtpof=true&sd=true"
  },{
    name: "Annual Report 2022-23",
    author: "Gender Cell IITK",
    resourceType: "Report",
    link: "https://docs.google.com/document/d/1JTToUclOMFTDXhw9QJKDNiOIh1zkeQQw/edit?usp=drivesdk&ouid=117882615103267759421&rtpof=true&sd=true"
  },{
    name: "Annual Report 2021-22",
    author: "Gender Cell IITK",
    resourceType: "Report",
    link: "https://docs.google.com/document/d/1JqNvP2LAVMNEZVHvUcBrSo14d8-0DecO/edit?usp=drivesdk&ouid=117882615103267759421&rtpof=true&sd=true"
  },
]
const Officeorders=[
  {
    name: "Women cell to Gender cell Name change",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-003-04-01-24.pdf "
  },
  {
    name: "Women Cell Faculty member change",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-60-05-08-23.pdf"
  },
  {
    name: "Women Cell Team change",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-51-22-07-22.pdf"
  },{
    name: "Re-constitution of the 'Women's Cell'",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-72-11-06-20.pdf"
  },{
    name: "Re-constitution of the 'Women's Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-71-09-06-20.pdf"
  },{
    name: "Extension of tenure of present connstitution of women cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-40-28-03-2020.pdf"
  },{
    name: "Replacement of staff Representative",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office%20Order_24-20-02-20.pdf"
  },
  {
    name: "Office Order for Relationship policy",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://drive.google.com/file/d/1wQMr0MQ7pgF2r-hvWPAKJteGPcVEpiEg/view?usp=sharing"
  },
]
const Officeorders2=[
  {
    name: "Replacement of UG students' representatives in the Women's Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no.%20136-15-11-19.pdf"
  },{
    name: "Extension of tenure of present constitution of the Women's Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no.-119-24-09-19.pdf"
  },{
    name: "Replacement of student Representative",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-84-2018-revised.pdf"
  },{
    name: "Replacement of student Representative",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office_Order_no_46.pdf"
  },{
    name: "Functions and responsibilities of women cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office_Order_no_52.pdf"
  },{
    name: "Re-Constitution of women cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office_Order_DIR_IITK_2016_OO_39.pdf"
  },{
    name: "Re-Constitution of women cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office_Order_DIR_IITK_2016_OO_39.pdf"
  },{
    name: "Director Nominee of womens cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/DIRIITK201465.pdf"
  },{
    name: "Chairperson and Vice-chairperson of women cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/DIRIITK2014OO015.pdf"
  },{
    name: "Constitution of Women Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/2013_072.pdf"
  },{
    name: "Constitution of Women Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/2013_037.pdf"
  },{
    name: "Constitution of Women Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/2013_028.pdf"
  },{
    name: "Constitution of Women Cell",
    author: "Gender Cell IITK",
    resourceType: "Office orders",
    link: "https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/2012_047.pdf"
  }
] 
const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
return (
    <div className="App1">
      <BannerCard title={title} description={description} buttons={buttons}/>
      <section id="mandate" className="section slide-in-right">
        <h2 className='bold'>Mandate</h2>
          
        <p>
          <br />
          IIT Kanpur endeavors to create a sustainable, equal-opportunity environment conducive to an all-round development of all members of the campus community, both professionally and personally. The institute constantly strives to ensure that people from all genders and from all walks of life, residing in or visiting the campus, are treated with respect and dignity. It is committed to making the campus-environment safe for everyone – free from exploitation, sexual harassment, and violence of any nature.
        </p>
        <p>
          The Gender Cell of IIT Kanpur was constituted in accordance with the{' '}
          <a href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link"  className='link1'>
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
        <p>The Cell also advises on available courses of action to people on campus who may be in distress.</p>
        <p>
          <strong>Mandate of the Gender Cell:</strong> a{' '}
          <a href="https://drive.google.com/file/d/1n1TDtLwd1HoBMlgyhMrgKYZWMVLRqzKN/view?usp=drive_link" target="_blank" className='link1'>
            link
          </a>{' '}
          to the office order.
        </p>
        <p>The Cell draws members from students, staff, and faculty, and is equally represented by women and men.</p>

      </section>

      <section id="understanding-harassment" className="section slide-in-right">
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
          <a href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link" target="_blank" className='link1'>
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
              <em>Voyeurism</em>: watching or capturing an image of a woman engaged in a private act. 
            </p>
          </li>
          <li>
            <p>
              <em>Stalking</em>: following a woman, contacting (or attempting to contact) a woman despite a clear
              indication of disinterest by the woman; monitoring the use of the internet by a woman (
              <a href="https://drive.google.com/file/d/1_d55FDziewIlE5BdD0hHpITrb2mT0mug/view?usp=drive_link" target="_blank" style={{ paddingRight: '0px' }} className='link1'>
                link
              </a>
              )
            </p>
          </li>
          <li>
            <p>
              <em>Exhibitionism</em>: Word, gesture or act intended to insult the modesty of a woman (
              <a href="https://drive.google.com/file/d/1_d55FDziewIlE5BdD0hHpITrb2mT0mug/view?usp=drive_link" target="_blank" style={{ paddingRight: '0px' }} className='link1'>
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
                <a href="https://drive.google.com/file/d/1d0SVFABd7i2eedQ_W3qwjaa9yVwHJQl-/view?usp=drive_link" target="_blank" style={{ fontWeight: 'bold', paddingRight: '0px' }} className='link1'>
                  link
                </a>
                )
              </strong>
            </p>
          </li>
        </ul>
      </section>

      <section id="resources">
      <div className="container1" id="annual-reports">
        <h3 className="title">Annual Reports</h3>
        
        <p className="description">
          The below given are Previous Year Annual Reports of Gender Cell IIT Kanpur.
        </p>
        <table className="resources-table">
          <thead>
            <tr>
              <th>Document name</th>
              <th>Author</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            {annualreports.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container1" id="office-orders">
        <h3 className="title">Office Orders</h3>
        <br/>
        <p className="description">
          The below given are some Office Orders of Gender Cell IIT Kanpur.
        </p>
        <div className="tables">
            <p className={isExpanded ? "text-expanded" : "text-collapsed"}>
        <table className="resources-table">
          <thead>
            <tr>
              <th>Document name</th>
              <th>Author</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            {Officeorders.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {Officeorders2.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
          </p>
          <button onClick={toggleReadMore} style={{color:'blue'}}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      </div>
      </div>
      
      <div className="container1" id="official-documents">
        <h3 className="title">Official documents</h3>
        
        <p className="description">
          The following are some important official documents regarding sexual harassment at the workplace, including Indian Government acts and reports, international conventions and research papers.
        </p>
        <table className="resources-table">
          <thead>
            <tr>
              <th>Document name</th>
              <th>Author</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="container1" id="articles">
        <h3 className="title" >Articles, Reports and Judgements</h3>
        
        <p className="description">
          The following are some important Articles, Reports and Judgements regarding sexual harassment at the workplace, including Indian Government acts and reports, international conventions and research papers.
        </p>
        <table className="resources-table">
          <thead>
            <tr>
              <th>Document name</th>
              <th>Author</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container1" id="other-official-docs">
        <h3 className="title">Other Official documents</h3>
        
        <p className="description">
          The following are some other important official documents regarding sexual harassment at the workplace, including Indian Government acts and reports, international conventions and research papers.
        </p>
        <table className="resources-table">
          <thead>
            <tr>
              <th>Document name</th>
              <th>Author</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            {otherresources.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.author}</td>
                <td><a href={resource.link}>{resource.resourceType}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </section>
      
      <div id="faqs" className="faqs">
      <Faqs/>
      </div>
      <LinksSection/>      
    </div>
    

  );

 

}

export default Resources;
