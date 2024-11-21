import React from "react";
import { Link } from "react-router-dom";
import { Edit2, Mail, Camera } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
// import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return null;
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <Helmet>
        <title>Discount PRO | Profile</title>
      </Helmet>
      <div className="container mx-auto px-4">
        {/* Cover Section */}
        <div
          className="h-64 rounded-lg bg-cover bg-center mb-8 relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=80)",
          }}
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome, {currentUser.displayName}!
            </h1>
          </div>
        </div>

        {/* Profile Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <img
                  src={
                    currentUser.photoURL || "https://via.placeholder.com/150"
                  }
                  alt={currentUser.displayName || "User"}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {currentUser.displayName}
              </h2>
              <div className="flex items-center text-gray-600 mb-6">
                <Mail className="h-5 w-5 mr-2" />
                <span>{currentUser.email}</span>
              </div>

              <Link
                to="/update-profile"
                className="btn-primary flex items-center gap-2"
              >
                <Edit2 className="h-5 w-5" />
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
