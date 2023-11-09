
const Banner = () => {
      return (
            <div>
                  <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/vPsTN9t/pngtree-blue-technology-web-banner-image-122453.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                              <div className="">
                                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl md:w-3/5 md:mx-auto font-bold">Find Your Next Tech Role: Explore and Apply Now!</h1>
                                    <p className="mb-5 text-sm md:text-base w-full md:w-2/3 mx-auto text-slate-300">Welcome to our Job Seekers Platform! Find your perfect match in the tech world. Post job openings or apply for roles that match your expertise. Your next big career move starts here!</p>
                                    <div className="flex justify-center">
                                          <div className="form-control">
                                                <label className="input-group">
                                                      <input type="text" placeholder="Search for Jobs" className="input text-black input-bordered" />
                                                      <span className="bg-[#D2F34C] text-[#244034] font-medium cursor-pointer">Search</span>
                                                </label>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;