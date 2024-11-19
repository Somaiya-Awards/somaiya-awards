import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { Download, Award, User, Users } from 'lucide-react';
import Logo from '../../../../container/assests/logo.png'
const ScoreCard = () => {
  const cardRef = useRef(null);
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  // Calculate final scores
  const calculateScores = (data) => {
    if (!data) return {};
    return {
      applicationScore: Math.round(0.4 * ((data.hoi_avg + data.ieac_avg/2) / 2) * 100) / 100,
      feedbackScore: (0.6 * ((data.student_avg + data.peers_avg) / 2)).toFixed(2),
      finalScore: (0.6 * ((data.student_avg + data.peers_avg) / 2) + 0.4 * ((data.ieac_avg / 2 + data.hoi_avg) / 2)).toFixed(2)
    };
  };

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
      link.download = 'somaiya-scorecard.png';
      link.click();
    });
  };

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
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scores = calculateScores(apiData);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div ref={cardRef} className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#8B0000] text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={Logo}
              alt="Somaiya Logo" 
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-2xl font-bold">Somaiya Awards Scorecard {new Date().getFullYear()}</h1>
          </div>
          <button 
            onClick={handleDownload} 
            className="flex items-center space-x-2 bg-white text-[#8B0000] px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            <Download className="h-5 w-5" />
            <span>Download</span>
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#00008B] border-b pb-2">Personal Details</h2>
            <div className="space-y-2">
              <DetailRow 
                icon={<User className="h-5 w-5 text-[#8B0000]" />} 
                label="Name" 
                value={apiData.name} 
                loading={loading} 
              />
              <DetailRow 
                icon={<Award className="h-5 w-5 text-[#8B0000]" />} 
                label="Award Type" 
                value={apiData.category} 
                loading={loading} 
              />
              <DetailRow 
                icon={<Users className="h-5 w-5 text-[#8B0000]" />} 
                label="Institute" 
                value={apiData.institute} 
                loading={loading} 
              />
            </div>
          </div>

          {/* Scores */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#00008B] border-b pb-2">Performance Scores</h2>
            <div className="space-y-2">
              <ScoreHighlight 
                label="Final Score" 
                value={scores.finalScore} 
                loading={loading} 
                color="bg-[#00008B] text-white" 
              />
              <ScoreHighlight 
                label="Application Score (40%)" 
                value={scores.applicationScore} 
                loading={loading} 
                color="bg-[#8B0000] text-white" 
              />
              <ScoreRow label="HOI Average" value={apiData.hoi_avg} loading={loading} />
              <ScoreRow label="IEAC Average" value={apiData.ieac_avg / 2} loading={loading} />
              <ScoreRow label="Student Feedback" value={apiData.student_avg} loading={loading} />
              <ScoreRow label="Peer Feedback" value={apiData.peers_avg} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const DetailRow = ({ icon, label, value, loading }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <div>
      <span className="text-sm text-gray-500">{label}</span>
      <p className="font-medium">
        {loading ? 'Loading...' : value || 'N/A'}
      </p>
    </div>
  </div>
);

const ScoreRow = ({ label, value, loading }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-semibold text-[#00008B]">
      {loading ? 'Loading...' : value || 'N/A'}
    </span>
  </div>
);

const ScoreHighlight = ({ label, value, loading, color = 'bg-blue-100' }) => (
  <div className={`${color} p-3 rounded-lg flex justify-between items-center`}>
    <span className="text-sm font-medium">{label}</span>
    <span className="text-xl font-bold">
      {loading ? 'Loading...' : value || 'N/A'}
    </span>
  </div>
);

export default ScoreCard;