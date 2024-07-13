

const Events = () => {
  return (
    <div>
        <div className="max-w-5xl text-[#333] font-[sans-serif] lg:my-12 my-8 lg:mx-auto mx-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4 lora-700">Our Exclusive Events</h2>
        <p className="text-sm lora-400">The events conducted by the Gender Cell at IIT Kanpur during the recent years.</p>
      </div>
      <div className="mt-16">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <img src="https://www.iitk.ac.in/wc/images/RunandWalk_Mar2018/large/1.jpg" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-4 lora-600">5 km run 5 km walk</h3>
            <p className="text-sm lora-400">The fitness camp featured a 5 km run and a 5 km walk through the IITK campus. The run challenged participants with an exciting route, while the walk offered a relaxed pace for those preferring a gentler activity. Both events promoted health, fitness, and community spirit.

</p>
            <button type="button"
              className="lora-400 px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
              <a href="./events"> Read More</a>
            </button>
          </div>
          <div className="max-md:order-1">
            <h3 className="text-2xl font-extrabold mb-4 lora-600">Overview of the Fitness Camp</h3>
            <p className="text-sm lora-400">The IITK Gender Cell successfully conducted a Fitness Camp aimed at promoting physical well-being and fostering a sense of community among participants. The camp provided attendees with valuable tools and knowledge to lead a healthier lifestyle through various fitness activities and educational sessions.

</p>
            <button type="button"
              className=" lora-400 px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
             <a href="./events"> Read More</a>
            </button>
          </div>
          <div>
            <img src="https://www.iitk.ac.in/wc/images/RunandWalk_Mar2018/large/1.jpg" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Events