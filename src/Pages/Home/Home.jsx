import Banner from "./Banner";
import ContactUs from "./ContactUs";
import JobByCategory from "./JobByCategory/JobByCategory";

const Home = () => {
      return (
            <div className="bg-[#F5F7FA]">
                  <Banner />

                  {/* job by category */}
                  <div className="bg-[#F5F7FA] ">
                        <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-20 mb-7 font-medium text-center text-[#244034] dark:text-white">Job Listing</h5>
                        <JobByCategory></JobByCategory>
                  </div>

                  {/* contact us */}
                  <ContactUs></ContactUs>
            </div>
      );
};

export default Home;

