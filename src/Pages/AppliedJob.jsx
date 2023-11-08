import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const AppliedJob = () => {

      const axios = useAxios()
      const { user } = useAuth();
      const [appliedJobs, setAppliedJobs] = useState([]);

      useEffect(() => {
            axios.get(`/user/appliedJobs?loggedEmail=${user?.email}`)
                  .then((data) => {
                        setAppliedJobs(data.data)
                  });
      }, [axios, user?.email])

      console.log('applied jobs bhasi', appliedJobs);


      return (
            <div className="max-w-7xl mx-auto my-16">
                  {
                        appliedJobs.length === 0 ?
                              <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                    <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                              </div>
                              :
                              <div>
                                    {
                                          appliedJobs?.map(job =>

                                                <div key={job?._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                      
                                                      <div className="flex flex-col py-5 items-center pb-10">
                                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={job?.logo} alt="Bonnie image" />
                                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{job?.title}</h5>
                                                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                                            <div className="flex mt-4 space-x-3 md:mt-6">
                                                                  <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                                                  <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                                                            </div>
                                                      </div>
                                                </div>

                                          )
                                    }
                              </div>
                  }

            </div>
      );
};

export default AppliedJob;