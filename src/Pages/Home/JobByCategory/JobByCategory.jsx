
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './jobByCategory.css'
import useAxios from '../../../Hooks/useAxios';
import { useEffect, useState } from 'react';
// import axios from 'axios';

const JobByCategory = () => {

      const axios = useAxios();
      const [allJobs, setAllJobs] = useState([]);
      const [jobByCategory, setJobByCategory] = useState([]);

      // all jobs
      const handleAllJob = async () => {
            try {
                  const response = await axios.get('allJobs');
                  setAllJobs(response.data)
            } catch (error) {
                  console.error('Error fetching jobs:', error);
            }
      };

      // jobs by category
      const handleJobsByCategory = async (category) => {
            
            try {
                  const response = await axios.get(`/allJobs/${category}`);
                  setJobByCategory(response.data);
                  
            } catch (error) {
                  console.error('Error fetching jobs:', error);
            }
      };


      console.log(jobByCategory);

      return (
            <div className='max-w-7xl mx-auto my-16'>
                  <div className='flex justify-start items-center'>
                        <Tabs>
                              <TabList className="react-tabs__tab-list">
                                    <Tab onClick={handleAllJob}>All jobs</Tab>
                                    <Tab onClick={() => handleJobsByCategory('OnSiteJob')}>On Site Job</Tab>
                                    <Tab onClick={() => handleJobsByCategory('RemoteJob')}>Remote Job</Tab>
                                    <Tab>Hybrid</Tab>
                                    <Tab>Part Time</Tab>
                              </TabList>

                              <TabPanel>
                                    {
                                          allJobs.map((job) => (
                                                <div key={job._id}>
                                                      <p>{job.title}</p>
                                                </div>
                                          ))
                                    }
                              </TabPanel>
                              <TabPanel>
                                    <h2>Any content 2</h2>
                              </TabPanel>
                              <TabPanel>
                                    <h2>Any content 3</h2>
                              </TabPanel>
                              <TabPanel>
                                    <h2>Any content 4</h2>
                              </TabPanel>
                              <TabPanel>
                                    <h2>Any content 5</h2>
                              </TabPanel>
                        </Tabs>
                  </div>
            </div>
      );
};

export default JobByCategory;