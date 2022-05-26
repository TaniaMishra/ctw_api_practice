import { parseFetchResponse } from './parse-fetch-response.js';

const baseURL = "https://dev-lead2change-ctw.azurewebsites.net/example/";

/**
 * It makes a request to the server, parses the response, and returns the students
 * @returns An array of students.
 */
export const getStudents = async () => {
  const response = await fetch(baseURL + 'getstudents');
  console.log(response);
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the student object that was created
 * @returns The student object
 */
export const addStudent = async (student) => {
  
  const response = await fetch(baseURL + 'createstudent', {
    method: 'POST',
    body: JSON.stringify(student),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a PUT request to the endpoint with the id of the user to update
 * @param id - The id of the user to update
 * @returns The response from the server.
 */
export const updateStudentActive = async (id) => {
  const response = await fetch(baseURL + 'updatestudent', {
    method: 'PUT',
    body: JSON.stringify({ id }),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

// /**
//  * It sends a DELETE request to the server with the id of the user to delete
//  * @param id - The id of the user to delete.
//  */
// export const deleteUser = async (id) => {
//   await fetch('/api/users', {
//     method: 'DELETE',
//     body: JSON.stringify({ id }),
//   });
// };

// /**
//  * It sends a POST request to the server, which deletes all users who haven't
//  * logged in for a while, and returns the deleted users
//  * @returns An array of users that were deleted.
//  */
// export const deleteInactiveUsers = async () => {
//   const response = await fetch('/api/users/delete-inactive', {
//     method: 'POST',
//   });

//   const parsedResponse = await parseFetchResponse(response);
//   return parsedResponse.users;
// };
