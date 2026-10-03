import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [matchCount, setMatchCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await api.get('/profile');
        setProfile(data.profile);

        const rec = await api.get('/recommendations');
        setMatchCount(rec.data.count);
      } catch {
        // Profile not set up yet, or no recommendations available
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="dashboard">
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6" >
      <h1 className="text-2xl font-bold text-slate-900">
        Welcome back, {user?.name?.split(' ')[0]} 👋
      </h1>
      <p className="mt-2 text-slate-600">Here's a quick snapshot of your account.</p>

      {loading ? (
        <p className="mt-8 text-slate-500">Loading your dashboard...</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="card">
            <p className="text-sm font-medium text-slate-500">Profile Status</p>
            {profile ? (
              <>
                <p className="mt-2 text-2xl font-bold text-slate-900">Complete</p>
                <p className="mt-1 text-sm text-slate-500">
                  {profile.gender ? `${profile.gender} · ` : ''}{profile.occupation} · {profile.social_category || 'General'} · {profile.state} · Age {profile.age}
                </p>
                <Link to="/profile" className="btn-secondary mt-4 inline-flex">
                  Edit Profile
                </Link>
              </>
            ) : (
              <>
                <p className="mt-2 text-2xl font-bold text-slate-900">Incomplete</p>
                <p className="mt-1 text-sm text-slate-500">
                  Complete your profile to get matched with schemes.
                </p>
                <Link to="/profile" className="btn-primary mt-4 inline-flex">
                  Complete Profile
                </Link>
              </>
            )}
          </div>

          <div className="card">
            <p className="text-sm font-medium text-slate-500">Matched Schemes</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {profile ? matchCount ?? 0 : '—'}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {profile
                ? 'Schemes you currently qualify for based on your profile.'
                : 'Complete your profile to see matches.'}
            </p>
            <Link
              to="/recommendations"
              className={`mt-4 inline-flex ${profile ? 'btn-primary' : 'btn-secondary pointer-events-none opacity-50'}`}
            >
              View Recommendations
            </Link>
          </div>
        </div>
      )}

      <div className="card mt-6 bg-slate-50">
        <h2 className="font-semibold text-slate-900">How eligibility works</h2>
        <p className="mt-2 text-sm text-slate-600">
          Every scheme match is decided by transparent backend rules comparing your age, gender,
          state, occupation, income, and education against each scheme's official criteria.
          Gemini AI is only used afterward — to explain matches in plain English and simplify
          scheme descriptions. It never decides who qualifies.
        </p>
      </div>
    </div>
    </div>
  );
}
