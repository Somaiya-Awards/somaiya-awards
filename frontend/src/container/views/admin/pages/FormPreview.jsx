import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import OutstandingInstForm from '../../../../data/Forms/OutstandingInstForm';
import ResearchForm from '../../../../data/Forms/ResearchForm';
import SportsStarForm from '../../../../data/Forms/SportsStarForm';
import StudentsFormData from '../../../../data/Forms/StudentsFormData';
import TeachingForm from '../../../../data/Forms/TeachingForm';
import NonTeachingForm from '../../../../data/Forms/NonTeachingForm';
import { useReactToPrint } from 'react-to-print';

const FormPreview = () => {
  const [data, setData] = useState({});
  const [formInfo, setFormInfo] = useState();
  const [title,setTitle] = useState()

  useEffect(() => {
    const formType = window.location.href.split('/')[4];
    const applicationID = window.location.href.split('/')[6];
    const url = `http://localhost:5001/admin/data/${formType}/preview`;

    setTitle(formType)
    switch (formType) {
      case 'outstanding-institution':
        setFormInfo(OutstandingInstForm);
        break;
      case 'research':
        setFormInfo(ResearchForm);
        break;
      case 'sports-boy':
      case 'sports-girl':
      case 'sports-coach':
        setFormInfo(SportsStarForm);
        break;
      case 'students':
        setFormInfo(StudentsFormData);
        break;
      case 'teaching':
        setFormInfo(TeachingForm);
        break;
      case 'non-teaching':
        setFormInfo(NonTeachingForm);
        break;
      default:
        break;
    }

    axios.get(url, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'user_id': localStorage.getItem('user_id'),
        'applicationid': applicationID,
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const componentRef = useRef();

  return (
    <div className="p-5" ref={componentRef}>
      <p className="text-xl text-red-800 mb-10 font-bold">
        {title? title.toUpperCase(): "loading ..."} Form Preview
      </p>
      {formInfo && Object.keys(data).length > 0 ? (
        <form>
          {Object.keys(data).map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block font-semibold text-red-800 mb-2">
                {formInfo.find((item) => item._name === key)?.title || key}
              </label>
              {formInfo.find((item) => item._name === key)?.type === 'file' ? (
                <a
                  href={`http://localhost:5001${data[key].split("data")[1]}`}
                  target="_blank"
                  download
                  className="bg-red-700 px-4 py-2 rounded-xl font-Poppins text-white my-3 mb-9"
                >
                  Download File
                </a>
              ) : (
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={data[key]}
                  readOnly
                  className="block mt-1 p-2 mb-9 border outline-none shadow-lg h-auto rounded w-[50%]"
                />
              )}
            </div>
          ))}
          <button type="button" onClick={handlePrint} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
            Print Form
          </button>
        </form>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default FormPreview;
