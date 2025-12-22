import React from 'react';
import img1 from '../assets/images/survey_img/2.png';
import img3 from '../assets/images/survey_img/3.png';
import img4 from '../assets/images/survey_img/4.png';
import img5 from '../assets/images/survey_img/5.png';
import img6 from '../assets/images/survey_img/6.png';
import img7 from '../assets/images/survey_img/7.png';
import img8 from '../assets/images/survey_img/8.png';
import img9 from '../assets/images/survey_img/9.png';

const SurveysResult: React.FC = () => {
    const images = [img1, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div className="bg-base-200 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-base-content mb-8">Surveys</h2>

                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-base-content mb-4">Pride Month Survey</h2>

                    <div className="bg-base-100 rounded-box p-6 shadow-lg max-w-4xl mb-8">
                        <p className="text-lg text-base-content mb-4">
                            The Gender Cell, IITK, conducted a campus-wide survey on sexual diversity during Pride Month in June 2024.
                            The objective of the survey was to assess students' understanding of gender diversity and to promote the spirit of Pride Month.
                        </p>
                        <div className="alert alert-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <div>
                                <h3 className="font-bold">Disclaimer:</h3>
                                <div className="text-sm">
                                    Survey was conducted strictly among the residents of IIT Kanpur. The dataset is based on voluntary responses and may not accurately represent the entire community. Results should be interpreted with caution.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((img, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200">
                                <figure className="px-4 pt-4">
                                    <img src={img} alt={`Survey Result ${index + 1}`} className="rounded-xl w-full h-auto object-contain" />
                                </figure>
                                <div className="card-body p-6 md:p-8">
                                    {/* Optional: Add descriptions if available */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveysResult;
