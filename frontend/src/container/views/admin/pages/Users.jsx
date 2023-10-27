import React, { useEffect, useState } from 'react'
import SideBar from '../../../../components/SideBar'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Users = () => {

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([
        {
            field: 'id',
            headerName: 'User ID',
            width: 350,
        },
        {
            field: 'email_id',
            headerName: 'Email ID',
            width: 350,
        },
        {
            field: 'institution',
            headerName: 'Institution',
            width: 350,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 350,
        },
        {
            field: 'delete user',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <button onClick={(event) => handleDelete(params, event)} >
                            <DeleteRoundedIcon style={{ color: 'gray' }} />
                        </button>
                    </div>
                )
            }
        }
    ])


    const handleDelete = (params) => {
        // console.log(params);
        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you wish to delete User ${params.row.email_id}`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',
        })
            .then((res) => {
                if (res.isConfirmed) {

                    // delete query
                    axios.delete('http://localhost:5001/admin/data/delete-user', {
                        data: { userId: params.row.id },
                        headers: {
                            'x-access-token': localStorage.getItem('token'),
                            'user_id': localStorage.getItem('user_id')
                        },
                    })
                        .then((res) => {
                            window.location.reload()
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                }
            })
    }

    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        // check user authentication

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
            navigate('/auth/login')
        }

        axios.get('http://localhost:5001/auth/validate', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'user_id': localStorage.getItem('user_id')
            }
        })
            .then((res) => {

                if (res.data['authorized'] && res.data['role'] === 'ADMIN') {

                    setAuthorized(res.data['authorized'])
                    setLoading(false);

                    axios.get('http://localhost:5001/admin/data/users', {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            setRows(res.data.users)
                        })
                        .catch((err) => {
                            console.log(err);
                        })

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
                navigate('/auth/login')
            })



    }, [])

    return (
        <div className='flex'>
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
                            <SideBar />
                            <div className='w-full h-screen flex-col'>

                                <div className='p-5 overflow-y-scroll'>

                                    <h1 className='text-2xl font-semibold font-Roboto text-red-800'>
                                        Users
                                    </h1>

                                    <div className='my-3 p-5'>

                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            density='comfortable'
                                            slots={{ toolbar: GridToolbar }}
                                            slotProps={{
                                                toolbar: {
                                                    showQuickFilter: true,
                                                    quickFilterProps: { debounceMs: 500 },
                                                },
                                            }}
                                            sx={{
                                                boxShadow: 2,
                                                padding: 2
                                            }}
                                        />

                                    </div>
                                </div>

                            </div>


                        </>
                        :
                        null
            }

        </div>
    )
}

export default Users