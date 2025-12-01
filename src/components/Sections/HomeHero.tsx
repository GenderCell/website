import React from "react";


// Import images
import homepage from "../../assets/images/home.png";

// Data for images
// ShuffleGrid code removed as it was unused

const HomeHero: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-br from-indigo-50 to-slate-100 py-16">
            <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                    <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
                        "I can be changed by what happens to me, but I refuse to be reduced by it." — Maya Angelou
                    </span>
                    <h3 className="text-4xl md:text-6xl font-semibold mb-6 font-heading">
                        Advancing Gender Equality Together
                    </h3>
                    <p className="text-base md:text-lg text-neutral mb-6">
                        At IIT Kanpur's Gender Cell, we are dedicated to promoting gender equality and preventing sexual harassment and abuse, creating a campus where everyone feels safe, respected, and valued. Join us in our efforts to educate, support, and advocate for a gender-sensitized community. It takes just one step to be the change !
                    </p>
                </div>
                <div className="relative">
                    <img src={homepage} alt="Home Hero" className="max-w-full h-auto rounded-lg shadow-lg mx-auto" />
                    {/* <ShuffleGrid /> */}
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
