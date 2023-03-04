import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { allStudentData, studentData } from "../App";

const ViewPdf = () => {
  //   const documents = [
  //     {
  //       id: 1,
  //       name: "Document 1",
  //       category: "Category 1",
  //       //   author: "Author 1",
  //     },
  //     {
  //       id: 2,
  //       name: "Document 2",
  //       category: "Category 2",
  //       //   author: "Author 2",
  //     },
  //     {
  //       id: 3,
  //       name: "Document 3",
  //       category: "Category 3",
  //       //   author: "Author 3",
  //     },
  //   ];

  const [allStudent, setAllStudent] = useContext(allStudentData);
  const documents = allStudent[0].documents;

  // const documents =

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sr No.
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Document Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Document Category
          </th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Author
          </th> */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {documents.map((document) => (
          <tr key={document.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {document._id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {document.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {document.path}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {document.author}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewPdf;
