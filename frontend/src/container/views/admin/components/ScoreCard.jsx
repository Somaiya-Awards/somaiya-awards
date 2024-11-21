import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import { Download, User, Building2, Award } from 'lucide-react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BarGraph from './BarGraph';
import axios from 'axios';
import Logo from '../../../../container/assests/logo.png'

const ScoreCard = () => {
    const cardRef = useRef(null);
    const [apiData, setApiData] = useState({})
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const handleDownload = () => {
        const cardElement = cardRef.current;
        html2canvas(cardElement, {
            scale: 2,
            backgroundColor: null,
            logging: false,
            useCORS: true,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'scoreCard.png';
            link.click();
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const isTeaching = window.location.href.split('/')[4] === 'teaching';
                const endpoint = isTeaching ? '/admin/data/teaching/scorecard' : '/admin/data/non-teaching/scorecard';
                
                const res = await axios.get(endpoint, {
                    headers: {
                        'x-user-id': localStorage.getItem('user_id'),
                        'x-access-token': localStorage.getItem('token'),
                        'x-application-id': window.location.href.split('/scorecard/')[1],
                    }
                });
                
                setApiData(res.data);
                setLoading(false)

                setData([
                    { name: 'HOI', AvgScore: res.data.hoi_avg },
                    { name: 'IEAC', AvgScore: res.data.ieac_avg },
                    { name: 'Students', AvgScore: res.data.student_avg },
                    { name: 'Peers', AvgScore: res.data.peers_avg }
                ])
            } catch (err) {
                console.error(err);
                setLoading(false)
            }
        };

        fetchData();
    }, [])

    const calculateFeedbackScore = () => {
        return (((apiData.student_avg || 0) + (apiData.peers_avg || 0)) / 2) * 0.6
    }

    const calculateFinalScore = () => {
        const applicationScore = Math.round(0.4*((apiData.hoi_avg + apiData.ieac_avg/2)/2)*100)/100
        const feedbackScore = calculateFeedbackScore()
        return (applicationScore + feedbackScore)
    }

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4 font-Poppins'>
            <div className='w-full max-w-4xl'>
                <div ref={cardRef} className='bg-white shadow-2xl rounded-2xl overflow-hidden'>
                    {/* Header */}
                    <div className='bg-red-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center'>
                        <div className='flex items-center space-x-4 mb-4 sm:mb-0'>
                            <img 
                                src={Logo} 
                                alt='Somaiya Logo' 
                                className='h-12 sm:h-16 w-12 sm:w-16 object-contain'
                            />
                            <h1 className='text-lg sm:text-2xl font-bold'>
                                Somaiya Awards Scorecard {new Date().getFullYear()}
                            </h1>
                        </div>
                        <div
                            className='flex items-center text-xs sm:text-sm text-center cursor-pointer bg-white text-red-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-gray-100 transition'
                            onClick={handleDownload}
                        >
                            <Download className='mr-2 w-4 h-4 sm:w-5 sm:h-5' />
                            Download
                        </div>
                    </div>

                    {/* Content */}
                    <div className='grid md:grid-cols-2 gap-6 p-6'>
                        {/* Personal Details */}
                        <div className='space-y-4 bg-gray-50 p-4 rounded-lg'>
                            <h2 className='text-xl font-semibold text-blue-800 border-b pb-2'>
                                Personal Details
                            </h2>
                            <div className='space-y-3'>
                                <DetailRow 
                                    label="Name" 
                                    value={apiData.name} 
                                    loading={loading} 
                                    icon={User}
                                />
                                <DetailRow 
                                    label="Institute" 
                                    value={apiData.institute} 
                                    loading={loading} 
                                    icon={Building2}
                                />
                                <DetailRow 
                                    label="Award Type" 
                                    value={apiData.category} 
                                    loading={loading} 
                                    icon={Award}
                                />
                            </div>
                        </div>

                        {/* Scores Section */}
                        <div className='space-y-4 bg-gray-50 p-4 rounded-lg'>
                            <h2 className='text-xl font-semibold text-blue-800 border-b pb-2'>
                                Performance Scores
                            </h2>
                            <div className='space-y-2'>
                                <ScoreRow 
                                    label="HOI Average (A)" 
                                    value={apiData.hoi_avg} 
                                    loading={loading} 
                                />
                                <ScoreRow 
                                    label="IEAC Average (B)" 
                                    value={apiData.ieac_avg/2} 
                                    loading={loading} 
                                />
                                <ApplicationScoreHighlight 
                                    label="Application Score (40% of A+B )" 
                                    value={Math.round(0.4*((apiData.hoi_avg + apiData.ieac_avg/2)/2)*100)/100} 
                                    loading={loading} 
                                />
                                <ScoreRow 
                                    label="Student Feedback" 
                                    value={apiData.student_avg} 
                                    loading={loading} 
                                />
                                <ScoreRow 
                                    label="Peer Feedback" 
                                    value={apiData.peers_avg} 
                                    loading={loading} 
                                />
                                <FeedbackScoreHighlight 
                                    label="360 degree Feedback Score (60%)" 
                                    value={loading ? null : calculateFeedbackScore()} 
                                    loading={loading} 
                                />
                                <FinalScoreHighlight 
                                    label="Final Score" 
                                    value={loading ? null : calculateFinalScore()} 
                                    loading={loading} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bar Graph Section */}
                    <div className='p-6 bg-gray-100'>
                        <BarGraph data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Helper Components
const DetailRow = ({ label, value, loading, icon: Icon }) => (
  <div className="">
    <div className="flex items-center space-x-3">
      {Icon && <Icon className="text-red-800 w-5 h-5" />}
      <span className="text-red-800 font-semibold text-sm sm:text-base">{label}</span>
    </div>
    <div className='bg-gray-100 p-3 rounded-lg m-2'>
      {loading ? <Skeleton width={150} /> : value || 'N/A'}
    </div>
  </div>
);

const ScoreRow = ({ label, value, loading }) => (
    <div className='flex justify-between items-center'>
        <span className='text-xs sm:text-sm text-gray-600'>{label}</span>
        <span className='font-semibold text-blue-800 text-sm sm:text-base'>
            {loading ? <Skeleton width={50} /> : 
             value != null ? value.toFixed(2) : 'N/A'}
        </span>
    </div>
);

const ApplicationScoreHighlight = ({ label, value, loading }) => (
    <div className='bg-blue-100 text-blue-800 p-3 rounded-lg flex justify-between items-center'>
        <span className='font-medium text-sm sm:text-base'>{label}</span>
        <span className='text-lg sm:text-xl font-bold'>
            {loading ? <Skeleton width={50} /> : 
             value != null ? value.toFixed(2) : 'N/A'}
        </span>
    </div>
);

const FeedbackScoreHighlight = ({ label, value, loading }) => (
    <div className='bg-green-100 text-green-800 p-3 rounded-lg flex justify-between items-center'>
        <span className='font-medium text-sm sm:text-base'>{label}</span>
        <span className='text-lg sm:text-xl font-bold'>
            {loading ? <Skeleton width={50} /> : 
             value != null ? value.toFixed(2) : 'N/A'}
        </span>
    </div>
);

const FinalScoreHighlight = ({ label, value, loading }) => (
    <div className='bg-red-800 text-white p-3 rounded-lg flex justify-between items-center'>
        <span className='font-medium text-sm sm:text-base'>{label}</span>
        <span className='text-lg sm:text-xl font-bold'>
            {loading ? <Skeleton width={50} /> : 
             value != null ? value.toFixed(2) : 'N/A'}
        </span>
    </div>
);

export default ScoreCard;