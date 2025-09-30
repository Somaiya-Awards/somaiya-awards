import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentNonTeachingFeedback from '../../../components/utils/data/StudentNonTeachingFeedback';
import StudentNonTeachingFeedbackForm from '../../../data/Forms/StudentNonTeachingFeedbackForm';
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import Footer from '../../../components/Footer';

const FeedbackNonTeachingST = () => {


  const navigate = useNavigate()

  const headings = ["Student Details", "Details of the employee to be evaluated", "Your feedback about the employee", "Review"]
  const limit = headings.length - 1;

  const aboutForm = "Student feedback on non-teaching staff is a valuable tool for continuous improvement, as it allows for addressing concerns, recognizing outstanding service, enhancing support services, fostering a positive and supportive learning environment, and ultimately ensuring a high-quality student experience. This feedback empowers non-teaching staff to adapt and grow, meeting the evolving needs of students and providing them with the best possible educational journey.";

  return (
    <div>
      <Navbar />
      <FormInfo
        title="Student's Feedback: Non-Teaching Staff"
        info={aboutForm}
      />

      <Forms
        pageHeadings={headings}
        pageCount={limit}
        data={StudentNonTeachingFeedbackForm}
        stages={StudentNonTeachingFeedback}
      />

      <div className='mt-[5rem]'>
        <Footer />
      </div>
    </div>
  )
}

export default FeedbackNonTeachingST
