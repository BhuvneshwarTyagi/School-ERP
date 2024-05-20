import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../assets/school logo.png';
import axios from 'axios';


export default function ImageTextInRow(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if(oldPassword===newPassword){
      setError('Old and New Password must be different ');
      setTimeout(() => {
          setError('');
      }, 2000);
      setIsSubmitting(false);
      return;
  }
    try {
      const response = await axios.post(`https://loginapi-y0aa.onrender.com/password/change/${role}`, {
        email,
        oldPassword,
        newPassword
      });

      if (response.status === 200) {
        console.log(response.data);
        setSuccessMessage('Password changed successfully');
        setTimeout(() => {
          setSuccessMessage('');
          setIsDialogOpen(false);
        }, 4000);
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.error || 'An error occurred');
      setTimeout(() => {
        setError('');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      {props.route ? (
        <Link to={props.route} className="flex items-start text-black text-sm no-underline">
          <img src={props.image} alt={props.alternateText} className="w-1/6 mb-4" />
          <span className="ml-2">{props.text}</span>
        </Link>
      ) : (
        <button onClick={handleButtonClick} className="flex items-start text-black text-sm no-underline">
          <img src={props.image} alt={props.alternateText} className="w-1/6 mb-4" />
          <span className="ml-2">{props.text}</span>
        </button>
      )}

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col bg-white tablet:w-fit tablet:px-10 mobile:w-full mobile:px-7 mobile:max-tablet:mt-10 justify-center">
              <img src={logo} alt="img" className="mr-4 h-28 self-center" />
              <h1 className="tablet:text-2xl mobile:text-2xl font-bold self-center whitespace-nowrap">Welcome Back</h1>
              <h1 className="text-lg mt-2 text-gray-400">Change Your Password</h1>

              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
              {successMessage && <div className="text-green-500 text-center mt-2">{successMessage}</div>}

              <label className="text-xl font-bold mt-3 text-left">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="rounded-lg shadow-md px-3 py-2 border-2 border-gray-500 mt-2 text-lg"
                disabled={isSubmitting}
              />

              <label className="text-xl font-bold mt-3 text-left">Old Password</label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                placeholder="Enter your old password"
                className="rounded-lg shadow-md px-3 py-2 border-2 border-gray-500 mt-2 text-lg"
                disabled={isSubmitting}
              />
              

              <label className="text-xl font-bold mt-3 text-left">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  placeholder="Enter your new password"
                  className="rounded-lg shadow-md px-3 py-2 border-2 border-gray-500 mt-2 text-lg pr-10"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  disabled={isSubmitting}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex w-60 px-3 py-2 mt-2 text-lg justify-between">
                <label className="text-lg font-medium text-center">
                  <input
                    type="radio"
                    name="role"
                    value="Admin-Dashboard"
                    checked={role === "Admin-Dashboard"}
                    onChange={handleRoleChange}
                    className="mr-3 w-4 h-4"
                    disabled={isSubmitting}
                  />
                  Admin
                </label>
                <label className="text-lg font-medium text-center">
                  <input
                    type="radio"
                    name="role"
                    value="Student-Dashboard"
                    checked={role === "Student-Dashboard"}
                    onChange={handleRoleChange}
                    className="mr-3 w-4 h-4"
                    disabled={isSubmitting}
                  />
                  Student
                </label>
              </div>

              <button
                className="flex w-64 shadow-md rounded-2xl py-2 mb-4 mt-2 justify-center self-center bg-blue-600"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <h1 className="font-medium text-2xl text-white">Change Password</h1>
              </button>

              <button
                className="flex w-64 shadow-md rounded-2xl py-2 mb-4 mt-2 justify-center self-center bg-blue-600"
                onClick={handleCloseDialog}
              >
                <h1 className="font-medium text-2xl text-white">Close</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
