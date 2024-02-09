import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobPostCard from './JobPostCard';
import SearchBox from './SearchBox';

const JobPostList = () => {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/jobposts')
      .then(response => {
        setJobPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching job posts:', error);
      });
  }, []); 

  useEffect(() => {
    console.log(jobPosts);
  }, [jobPosts]);

  return (
    <div style ={{backgroundColor:'hsla(215,0%,100%,1)',
    backgroundImage:
    `radial-gradient(at 80% 0%, hsla(189,83%,45%,1) 0px, transparent 50%),
    radial-gradient(at 19% 98%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 0% 1%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 98% 98%, hsla(343,100%,76%,1) 0px, transparent 50%)`,display: 'flex',
    alignItems: 'center',
    flexDirection:"column",
    flexWrap: 'wrap',
    height: 'auto'}}
  >
        
        <SearchBox/>
        <br/>
      {jobPosts.map(jobPost => (
        <JobPostCard key={jobPost._id} jobPost={jobPost} />
      ))}
      <br/>
    </div>
  );
};

export default JobPostList;
