import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";

const AllJobs = () => {

      const [allJobs, setAllJobs] = useState([]);
      const axios = useAxios()

      useEffect(() => {

            try {
                  axios.get('/allJobs')
                        .then(data => {
                              setAllJobs(data.data);
                              console.log(data.data);
                        })
            } catch (error) {
                  console.error('Error fetching jobs:', error);
            }

      }, [axios])

      return (
            <div className="bg-[#F5F7FA] pt-10 pb-20">
                  <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-6 mb-7 font-medium text-center text-[#244034] dark:text-white">All Jobs</h5>
                  <div className="max-w-7xl mx-auto">
                        {
                              allJobs?.map((job) => (
                                    <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                          <div className='flex flex-col md:flex-row  gap-6'>
                                                <div className='flex items-center rounded-lg justify-center'>
                                                      <img className='w-full rounded-lg md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                </div>
                                                <div className='space-y-5 py-6'>
                                                      <div className=''>
                                                            <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                            <p className='text-3xl text-center md:text-start mb-3 text-[#000]'>{job?.title}</p>
                                                      </div>
                                                      <div className=''>
                                                            <div className='flex justify-center md:justify-start'>
                                                                  <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                <div className='md:mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                </div>

                                                <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default AllJobs;