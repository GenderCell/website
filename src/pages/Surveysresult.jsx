// import React from 'react';
// import BarChartComponent from '../components/Charts/BarChartComponent';
// import LineChartComponent from '../components/Charts/LineChartComponent';
// import '../css/Survey.css'
// import LinksSection from '../components/Linkscard/LinkCard';
// const SurveyResults = () => {
//     return (
//         <>
//         <div className="app">
//             <h2>Surveys</h2>
//             <div className="pride">
//                 <h2>Pride Month Survey</h2>
//                 <div className="content">
//                 <div class="carousel">
//     {/* <div><img src="1.jpg" alt="Image1" /></div> */}
//     <div><img src="2.jpg" alt="Image2" /></div>
//     <div><img src="3.jpg" alt="Image3" /></div>
//     <div><img src="4.jpg" alt="Image4" /></div>
//     <div><img src="5.jpg" alt="Image5" /></div>
//     <div><img src="6.jpg" alt="Image6" /></div>
//     <div><img src="7.jpg" alt="Image7" /></div>
//     <div><img src="8.jpg" alt="Image8" /></div>
//     <div><img src="9.jpg" alt="Image9" /></div>
// </div>

//                 </div>
//             </div>
//         </div>
//         </>

//     );
// };

// export default SurveyResults;

import React from 'react';
import '../css/Survey.css';
import img1 from '../assets/images/survey_img/2.png'
import img3 from '../assets/images/survey_img/3.png'
import img4 from '../assets/images/survey_img/4.png'
import img5 from '../assets/images/survey_img/5.png'
import img6 from '../assets/images/survey_img/6.png'
import img7 from '../assets/images/survey_img/7.png'
import img8 from '../assets/images/survey_img/8.png'
import img9 from '../assets/images/survey_img/9.png'
const GridLayout = () => {
  return (
    <div className="container1">
        <h2>Surveys</h2>
        <div className="pride">
        <h2>Pride Month Survey</h2>
        <p style={{padding:'20px 80px'}}>The Gender Cell, IITK, conducted a campus-wide survey on sexual diversity during Pride Month in June 2024. The objective of the survey was to assess students' understanding of gender diversity and to promote the spirit of Pride Month.

<h2 style={{fontSize:'19px'}}>  Disclaimer:</h2> Survey was conducted strictly among the residents of IIT Kanpur. The dataset is based on voluntary responses and may not accurately represent the entire community. Results should be interpreted with caution.
</p>
    <div className="grid-container">
      <div className="grid-item"><img src={img1} alt="" /> </div>
      <div className="grid-item"><img src={img3} alt="" /></div>
      <div className="grid-item"><img src={img4} alt="" /></div>
      <div className="grid-item"><img src={img5} alt="" /></div>
      <div className="grid-item"><img src={img6} alt="" /></div>
      <div className="grid-item"><img src={img7} alt="" /></div>
      <div className="grid-item"><img src={img8} alt="" /></div>
      <div className="grid-item"><img src={img9} alt=" " /></div>
      {/* <div className="grid-item">Item 9</div> */}
        </div>
    </div>
    </div>
  );
};

export default GridLayout;
