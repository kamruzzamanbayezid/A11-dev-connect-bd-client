import Banner from "./Banner";
import JobByCategory from "./JobByCategory/JobByCategory";

const Home = () => {
      return (
            <div>
                  <Banner />

                  {/* job by category */}
                  <div className="bg-[#F5F7FA] pb-20">
                        <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-20 mb-7 font-medium text-center text-[#244034] dark:text-white">Job Listing</h5>
                        <JobByCategory></JobByCategory>
                  </div>

                  <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                        <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                  </div>
            </div>
      );
};

export default Home;

