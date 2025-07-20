import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser } from '../redux/slices/authSlice';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signupUser({
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
      }));
    } else {
      dispatch(loginUser({
        email: formData.email,
        password: formData.password,
      }));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(isSignup ? 'Signup successful' : 'Login successful');
      navigate('/chat');
    }
    if (error) {
      toast.error(error);
    }
  }, [isAuthenticated, error]);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignup ? 'Register' : 'Login'}
        </h2>

        {isSignup && (
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Please wait...' : isSignup ? 'Register' : 'Login'}
        </button>

        <p className="text-sm text-center mt-4">
          {isSignup ? 'Already a user?' : 'New user?'}{' '}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login here' : 'Register here'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Account;
