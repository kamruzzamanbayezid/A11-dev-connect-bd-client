import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AddAJob = () => {

      const { user } = useAuth();
      const userName = user?.displayName;

      // const [UserName, setUserName] = useState('');
      const [jobCategory, setJobCategory] = useState('');
      const [title, setTitle] = useState('');
      const [image, setImage] = useState('');
      const [salaryRange, setSalaryRange] = useState('');
      const [postingDate, setPostingDate] = useState('');
      const [deadline, setDeadline] = useState(0);
      const [applicantsNumber, setApplicantsNumber] = useState(0);
      const [description, setDescription] = useState('');

      // const resetForm = () => {
      //       setName('');
      //       setBrand('');
      //       setImage('');
      //       setType('');
      //       setPrice('');
      //       setRating(0);
      //       setDescription('');
      // };

      const handleAddJob = e => {
            e.preventDefault();
            const formData = {
                  jobCategory,
                  title,
                  userName,
                  image,
                  salaryRange,
                  postingDate,
                  deadline,
                  applicantsNumber,
                  description,
            };

            console.log(formData);
            fetch('http://localhost:5000/api/v1/allJobs', {
                  method: 'POST',
                  'Content-Type': 'application/json',
                  body: JSON.stringify(formData)
            })
                  .then(res => res.json())
                  .then(data => console.log(data.data))
      };

      return (
            <div >
                  <div className="bg-[#244034] min-h-[35vh]">
                        <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl pt-7 text-white font-light">Post a Job</h1>
                        <p className="text-center mt-6 text-slate-200">Get your job posting seen by thousands of job seekers.</p>
                  </div>
                  <div className="max-w-7xl mx-auto my-10">
                        <form onSubmit={handleAddJob} className="lg:w-4/5 p-4 mx-auto">
                              <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                          <input defaultValue={user?.displayName
                                          }
                                                type="text" id="first_name" name="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>

                                    <div>
                                          <label htmlFor="job_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job title</label>
                                          <input value={title}
                                                onChange={(e) => setTitle(e.target.value)} type="text" id="job_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter job title" required />
                                    </div>
                                    <div>
                                          <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary range</label>
                                          <input name="text"
                                                value={salaryRange}
                                                onChange={(e) => setSalaryRange(e.target.value)}
                                                type="text" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Salary Range" required />
                                    </div>
                                    <div>
                                          <label htmlFor="applicants" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applicants Number</label>
                                          <input type="number"
                                                name="applicants-number"
                                                value={applicantsNumber}
                                                onChange={(e) => setApplicantsNumber(e.target.value)} id="applicants" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="applicants number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                    </div>
                                    <div>
                                          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Posting Date</label>
                                          <input type="date"
                                                name="postingDate"
                                                value={postingDate}
                                                onChange={(e) => setPostingDate(e.target.value)} id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Posting Date" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                    </div>
                                    <div>
                                          <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Deadline</label>
                                          <input type="date"
                                                name="deadline"
                                                value={deadline}
                                                onChange={(e) => setDeadline(e.target.value)} id="deadline" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="application deadline" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                    </div>


                                    <div>
                                          <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                          <input name="image"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)} type="photo_URL" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                                    </div>
                                    <select name="jobCategory" value={jobCategory} onChange={(e) => { setJobCategory(e.target.value) }}>
                                          <option value="">Select Job Category</option>
                                          <option value="On Site Job">On Site Job</option>
                                          <option value="Remote Job">Remote Job</option>
                                          <option value="Hybrid">Hybrid</option>
                                          <option value="Part Time">Part Time</option>
                                    </select>
                              </div>

                              <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort Description</label>
                                    <textarea name="description"
                                          value={description}
                                          onChange={(e) => setDescription(e.target.value)} rows="3" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description" required />
                              </div>

                              <button type="submit" className="w-full text-white bg-[#244034] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a job</button>


                        </form>

                  </div>
            </div>
      );
};


export default AddAJob;