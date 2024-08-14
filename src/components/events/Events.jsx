

const Events = () => {
  return (
    <div>
        <div className="max-w-5xl text-[#333] font-[sans-serif] lg:my-12 my-8 lg:mx-auto mx-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4 lora-700">Our Events</h2>
        <p className="text-sm lora-400">The events conducted by the Gender Cell at IIT Kanpur during the recent years.</p>
      </div>
      <div className="mt-16">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <img src="https://www.iitk.ac.in/wc/images/RunandWalk_Mar2018/large/1.jpg" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-4 lora-600">5 km run 5 km walk</h3>
            <p className="text-sm lora-400"> Gender Cell, IITK conducted a 5KM: Run and Walk event to spread awareness of gender equality and prevention of sexual harassment. The run challenged the participants with an exciting route with refreshments at regular intervals. Community spirit & health building along with active gender sensitization was carried out.


</p>
            {/* <button type="button"
              className="lora-400 px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
              <a href="./events"> Read More</a>
            </button> */}
          </div>
          <div className="max-md:order-1">
            <h3 className="text-2xl font-extrabold mb-4 lora-600">Movie Screening - "Checkmate Turup"</h3>
 	
   
            <p className="text-sm lora-400">The Gender Cell organized a screening of the thought-provoking movie "Checkmate Turup", followed by a collective and insightful discussion led by the talented actor, Nidhi Qazi. The screening provided an engaging platform for the participants to delve into the movie's themes and explore its societal impact.</p>
            {/* <button type="button"
              className=" lora-400 px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
            //  {/* <a href="./events"> Read More</a> 
            </button> */}
          </div>
          <div>
            <img src="https://www.iitk.ac.in/wc/images/Flavia_Day2_Mar2018/large/3.jpg" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', color:'blue', marginTop:'33px',fontSize:'20px'}}> <a href="./events" style={{width:'max-content', backgroundColor:'#2563EB',color:'white',padding:'10px 25px',borderRadius:'7px'  }}> View More Events... </a></div>
    </div>
    </div>
  )
}

export default Events