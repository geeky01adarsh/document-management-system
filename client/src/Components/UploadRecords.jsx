import React from "react";

function UploadRecords() {
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

            <div>
              <label
                htmlFor="document-file"
                className="mb-4 block text-2xl font-medium"
              >
                Document File
              </label>
              <div className="mt-1">
                <input
                  id="document-file"
                  name="document-file"
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
