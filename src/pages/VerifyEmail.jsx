import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { verifyEmail } from '../api/auth';

const VerifyEmail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    verifyEmail(token)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  }, [token]);

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-12 text-center space-y-6">
        {status === 'loading' && <p className="text-zinc-500 font-medium">Verifying your email...</p>}

        {status === 'success' && (
          <>
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
            <h1 className="text-2xl font-black uppercase tracking-tight text-zinc-900">Email Verified</h1>
            <p className="text-zinc-500 text-sm">Your account is confirmed. You can sign in now.</p>
            <Link to="/login" className="inline-block mt-4 px-8 py-4 bg-zinc-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors">
              Go to Login
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="w-14 h-14 text-red-500 mx-auto" />
            <h1 className="text-2xl font-black uppercase tracking-tight text-zinc-900">Verification Failed</h1>
            <p className="text-zinc-500 text-sm">This link is invalid or has expired.</p>
            <Link to="/login" className="inline-block mt-4 px-8 py-4 bg-zinc-100 text-zinc-700 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Back to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
