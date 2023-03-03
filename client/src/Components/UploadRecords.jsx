import React from "react";

function UploadRecords() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium text-gray-900">
            Upload Student Records
          </h2>
        </div>

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="document-category"
                className="block text-sm font-medium text-gray-700"
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
                className="block text-sm font-medium text-gray-700"
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
