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
            <div>
                  <div className="bg-[#244034] min-h-[35vh] flex items-center justify-center">
                        <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl  text-white font-light">Job You Applied</h1>
                  </div>

                  <div className="max-w-7xl mx-auto my-16">
                        {
                              appliedJobs.length === 0 ?
                                    <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                          <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                                    </div>
                                    :
                                    <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                          {
                                                appliedJobs?.map(job =>

                                                      <div key={job?._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                                            <div className="flex flex-col py-5 items-center pb-10">
                                                                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={job?.logo} alt="Bonnie image" />

                                                                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{job?.title}</h5>
                                                                  <span className="text-sm text-gray-500 dark:text-gray-400">{job?.jobCategory}</span>
                                                                  <span className="text-base text-gray-500 dark:text-gray-900 mt-2">{job?.salaryRange}</span>

                                                            </div>
                                                      </div>

                                                )
                                          }
                                    </div>
                        }

                  </div>
            </div>
      );
};

export default AppliedJob;