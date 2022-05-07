import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return <div>
      <h1 className='text-danger text-center mt-5'>Your Email is not verified❌</h1>
      <h2 className='text-warning text-center'>Please verified your email Address🚫</h2>
      <button className='btn btn-info mx-auto d-block mb-5 fw-bolder'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Send verification Email Again
      </button>
    </div>
  }

  return children;
};

export default RequireAuth;