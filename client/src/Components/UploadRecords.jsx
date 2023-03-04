import React, { useState, useContext } from "react";
import axios from "axios";
import { student_id_details } from "../App";
const URL = "http://localhost:5000/";


function UploadRecords() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [student_id, setStudent_id] = useState();

  // console.log(student_id)
  const handleFileChange = (e) => {
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();

    console.log(student_id)
    // create new FormData object and append selected file
    const formData = new FormData();
    formData.append("file", selectedFile);

    // send file to backend API endpoint
    axios
      .post(`${URL}docs/student/upload/${student_id}`, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-2xl items-center mt-8 bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="flex justify-center">
          <h2 className="text-3xl font-medium text-black-800">
            Upload Documents
          </h2>
        </div>

        <form className="mt-8 space-y-6">
          <div className="text-2xl grid grid-cols-1 gap-y-6">
            <div className="text-black-800">
              <label
                htmlFor="document-category"
                className="mb-4 block font-medium "
              >
                Document Category
              </label>
              <div className="mt-1">
                <select
                  id="document-category"
                  name="document-category"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Aadhar card</option>
                  <option>Bank Account Transcript</option>
                  <option>MarkSheet 12th</option>
                  <option>MarkSheet 10th</option>
                  <option>Birth Certificate</option>
                  <option>Jee Result</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mb-4 block text-2xl font-medium">
              <h2 className="text-2xl font-medium text-black-800 mb-4 block">
                Student ID
              </h2>
              <input
                value={student_id}
                onChange={(e) => setStudent_id(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="document-file"
                className="mb-4 block text-2xl font-medium"
              >
                Document File
              </label>

              <div className="mt-1">
                <input
                  onChange={handleFileChange}
                  id="file"
                  name="file"
                  type="file"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleFileUpload}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadRecords;
