import { useState } from 'react';
import { updateUserProfile } from '../api/profile';

const Profile = () => {
    const [profile, setProfile] = useState({ name: '', email: '', bio: '' });
    const [userId, setUserId] = useState('');

    const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(userId, profile);
            alert("Profile Updated!");
        } catch (error) {
            console.error("Update Failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Update Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 outline-none" 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 outline-none" 
                    />
                    <textarea 
                        name="bio" 
                        placeholder="Short Bio" 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 outline-none resize-none" 
                        rows="3"
                    ></textarea>
                    <input 
                        type="text" 
                        placeholder="User ID" 
                        onChange={(e) => setUserId(e.target.value)} 
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 outline-none" 
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;