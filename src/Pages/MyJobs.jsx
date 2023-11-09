import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobs = () => {

      const { user } = useAuth();
      const userEmail = user?.email;
      const axios = useAxios()

      const [myJobs, setMyJobs] = useState([]);

      useEffect(() => {
            axios
                  .get(`/jobs?userEmail=${userEmail}`)
                  .then((data) => {
                        setMyJobs(data.data);
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
      }, [axios, userEmail]);

      const handleDelete = (id) => {

            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axios.delete(`/allJobs/singleJobs/${id}`)
                              .then(data => {
                                    if (data.data.deletedCount > 0) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your job has been deleted.",
                                                icon: "success"
                                          });
                                          const remaining = myJobs.filter(job => job._id !== id)
                                          setMyJobs(remaining)
                                    }
                              })
                              .catch(error => {
                                    toast.error(error.message);
                              })
                  }
            });
      }

      return (
            <div>
                  <div className="bg-[#244034] min-h-[35vh] flex items-center justify-center">
                        <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl  text-white font-light">My Jobs</h1>
                  </div>

                  <div className="bg-[#F5F7FA] pt-10 pb-20">

                        <div className="max-w-7xl mx-auto">
                              {
                                    myJobs?.map((job) => (
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
                                                            <div className='md:mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                  <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                  <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>


                                                      <Link to={`/jobDetails/${job?._id}`}>
                                                            <button className="w-full text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                      </Link>
                                                      <Link to={`/updateJobs/${job?._id}`}>
                                                            <button className="w-full text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">Update</button>
                                                      </Link>

                                                      <button onClick={() => handleDelete(job?._id)} className="w-full text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">Delete</button>

                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      );
};

export default MyJobs;