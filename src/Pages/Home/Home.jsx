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

                  
            </div>
      );
};

export default Home;

