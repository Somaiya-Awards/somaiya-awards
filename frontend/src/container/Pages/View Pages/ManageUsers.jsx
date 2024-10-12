import React, { useState, useEffect } from 'react'
import SideBar from '../../../components/SideBar'
import Field from '../../../components/utils/Field'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import PasswordValidator from 'password-validator'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { MoonLoader } from 'react-spinners';
import institutes from '../../../data/Institutions/institutes.js'
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import Papa from 'papaparse';

const ManageUsers = () => {

  const institutionOptions = institutes
  // for password checks

  const schema = new PasswordValidator()

  schema
    .is().min(8)
    .is().max(20)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces()
    .is().not().oneOf(['qwerty', 'password', '123456']);

  const [credentials, setCredentials] = useState({})

  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)
  const [files, setFiles] = React.useState([]);

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };


  const handleUpload = async () => {

    const file = files[0].file;

    if (!file) {
        alert("File is missing or invalid.");
        return;
    }

    if (files[0].type !== 'text/csv') {
      alert("Invalid file type uploaded. Please upload valid file type");
      return;
  }


    const text = await file.text();
    const parsedData = Papa.parse(text, {header:true,skipEmptyLines:true,});


    const data = {
        formData: parsedData.data,
    }

    axios.post('/auth/bulk-create',data).then((res)=>{
      console.log(res.data);
      alert(res.data.message)
      setFiles([])
    })
    .catch((err)=>{
      console.error(err)
      alert(err)
    })
};

  const navigate = useNavigate();


  const handleChange = (event) => {

    const { name, value } = event.target;

    if (name === 'user_email_id') {

      setCredentials({ ...credentials, [name]: value.toLowerCase() });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }

  }

  const handleSubmit = async () => {

    if (Object.keys(credentials).length < 3) {

      toast.error('All fields required', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
    else {


      console.log(credentials);

      if (!schema.validate(credentials.user_password)) {

        const messages = schema.validate(credentials.user_password, { details: true })

        const errorMessages = messages.map((item) => `<p class='text-sm text-justify font-Poppins text-red-800'>${item.message}</p>`);

        Swal.fire({
          icon: 'error',
          html: errorMessages.join(''),
          confirmButtonColor: 'rgb(185,28,28)'
        })

      }
      else {

        await axios.post('/auth/register', credentials)
          .then((res) => {
            console.log(res);
            setCredentials({})
            toast.success('User created successfully', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

          })
          .catch((err) => {
            console.log(err);

            toast.error('Failed to create User', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

          })
      }


    }
  }

  // AUTH

  useEffect(() => {

    if (!localStorage.getItem('token') || !localStorage.getItem('user_id')) {
      Swal.fire({
        title: "Failed to Login",
        text: "We failed to recognize you! Try relogging",
        imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
        // imageWidth:"150",
        imageHeight: '250',
        confirmButtonColor: "rgb(185,28,28)"
      })
      navigate('/auth/login')
    }
    else {

      axios.get('/auth/validate', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'x-user-id': localStorage.getItem('user_id'),
        }
      })
        .then((res) => {

          if (res.data['authorized'] && res.data['role'] === 'ADMIN') {

            setAuthorized(res.data['authorized'])
            setLoading(false)
          }
          else {

            Swal.fire({
              title: "Failed to Login",
              text: "We failed to recognize you! Try relogging",
              imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
              // imageWidth:"150",
              imageHeight: '250',
              confirmButtonColor: "rgb(185,28,28)"
            })
            navigate('/auth/login')
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Failed to Login",
            text: "We failed to recognize you! Try relogging",
            imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
            // imageWidth:"150",
            imageHeight: '250',
            confirmButtonColor: "rgb(185,28,28)"
          })
          navigate('/auth/login')
        })
    }
  }, [])

  return (
    <div>
      {
        loading
          ?
          <>
            <div className='w-full h-screen flex justify-center items-center'>
              <MoonLoader
                loading={loading}
                size={50}
                color="rgb(185,28,28"
              />
            </div>
          </>
          :
          authorized
            ?
            <>
              <div className='flex h-screen'>
                <SideBar />
                <div className='flex flex-col w-full p-5 overflow-y-scroll'>
                  <div className='font-Poppins text-2xl font-semibold'>
                    <h2>Manage Users</h2>
                  </div>
                  <div className='flex justify-center'>

                    <div className='w-[50%]  shadow-xl p-4 m-5'>

                      <h2 className='font-Poppins text-center text-2xl my-3 text-red-700 font-semibold'>
                        Add User
                      </h2>

                      <div className='px-3'>

                        <Field
                          title='Email ID'
                          type='email'
                          placeholder="awards.svv@somaiya.edu"
                          name='user_email_id'
                          value={credentials['user_email_id'] || ''}
                          onChange={handleChange}
                        />


                        <Field
                          title='Role'
                          type='dropdown'
                          name='user_role'
                          value={credentials['user_role'] || ''}
                          options={["ADMIN", "IEAC", "HOI", "SPORTS ADMIN", "STUDENTS ADMIN", "RESEARCH ADMIN", "STUDENT", "PEER"]}
                          dropdownHiddenItem='Select Role'
                          onChange={handleChange}
                        />

                        {
                          credentials.user_role === "ADMIN" || credentials.user_role === "SPORTS ADMIN" || credentials.user_role === "STUDENTS ADMIN" || credentials.user_role === "RESEARCH ADMIN"
                            ?
                            null
                            :
                            <>
                              <Field
                                title='Institution'
                                type='dropdown'
                                name='user_institution'
                                value={credentials['user_institution'] || ''}
                                dropdownHiddenItem='Select institution'
                                options={institutionOptions}
                                onChange={handleChange}
                              />
                            </>
                        }


                        <Field
                          title='Password'
                          type='password'
                          name='user_password'
                          value={credentials['user_password'] || ""}
                          placeholder='set default password'
                          onChange={handleChange}
                        />

                      </div>

                      <div className='flex justify-center my-4'>
                        <div
                          onClick={handleSubmit}
                          className='bg-red-700 rounded-lg p-3 w-[30%] text-center text-white font-Poppins hover:bg-red-600'>
                          Create User
                        </div>
                        <ToastContainer />
                      </div>

                      <div className=' my-10'>
                        <Dropzone
                          onChange={updateFiles}
                          value={files}
                          className="font-Poppins text-sm"
                          color="#910904"
                          accept=".csv"
                          maxFileSize={5 * 1024 * 1024} // 5MB
                          maxFiles={1}
                          actionButtons={{
                            position: "after",
                            cleanButton: { style: { backgroundColor: "#ff8175" } },
                            uploadButton: { style: { textTransform: "uppercase", backgroundColor: "#32a852" }, onClick: handleUpload, label: "Submit" },
                          }}
                          footerConfig={{ customMessage: "Only CSV files up to 5MB are allowed" }}
                          label={"📃 Drop Files here"}
                          behaviour="replace"
                        >
                          {files.map((file) => (
                            <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview smartImgFit='orientation' />
                          ))}
                        </Dropzone>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            navigate('/auth/login')
      }

    </div>
  )
}

export default ManageUsers
