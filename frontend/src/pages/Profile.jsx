import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal',
];

const OCCUPATIONS = [
  'Student', 'Farmer', 'Self-Employed', 'Business Owner', 'Entrepreneur',
  'Salaried Employee', 'Unemployed', 'Homemaker', 'Retired',
];

const EDUCATION_LEVELS = [
  'Below 8th', '8th Pass', '9th Pass', '10th Pass', '12th Pass',
  'Graduate', 'Post Graduate', 'Doctorate',
];

const SOCIAL_CATEGORIES = ['General', 'OBC', 'SC', 'ST', 'EWS'];
const GENDERS = ['Male', 'Female', 'Transgender', 'Other'];

export default function Profile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    age: '',
    gender: '',
    state: '',
    occupation: '',
    annual_income: '',
    education: '',
    social_category: 'General',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data } = await api.get('/profile');
        setForm({
          age: data.profile.age,
          gender: data.profile.gender || '',
          state: data.profile.state,
          occupation: data.profile.occupation,
          annual_income: data.profile.annual_income,
          education: data.profile.education,
          social_category: data.profile.social_category || 'General',
        });
      } catch {
        // No profile yet — that's fine, user will create one
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);
    try {
      await api.post('/profile', {
        age: parseInt(form.age, 10),
        gender: form.gender,
        state: form.state,
        occupation: form.occupation,
        annual_income: parseFloat(form.annual_income),
        education: form.education,
        social_category: form.social_category || 'General',
      });
      setSuccess('Profile saved successfully!');
      setTimeout(() => navigate('/recommendations'), 900);
    } catch (err) {
      if (!err.response) {
        setError('Cannot connect to backend server. Make sure your backend API is running on http://localhost:5001.');
      } else {
        const data = err.response.data;
        const msg = (data?.errors && Array.isArray(data.errors))
          ? data.errors.join(' ')
          : (data?.message || 'Failed to save profile.');
        setError(msg);
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-slate-500">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Your Profile</h1>
      <p className="mt-2 text-sm text-slate-600">
        This information determines which schemes you're matched with. Nothing here is shared
        outside GovAssist AI.
      </p>

      <form onSubmit={handleSubmit} className="card mt-8 space-y-5">
        {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        {success && (
          <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>
        )}

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="label" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min="0"
              max="120"
              required
              className="input-field"
              placeholder="e.g. 28"
              value={form.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              className="input-field"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              {GENDERS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label" htmlFor="annual_income">
              Annual income (₹)
            </label>
            <input
              id="annual_income"
              name="annual_income"
              type="number"
              min="0"
              required
              className="input-field"
              placeholder="e.g. 250000"
              value={form.annual_income}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="state">
              State
            </label>
            <select
              id="state"
              name="state"
              required
              className="input-field"
              value={form.state}
              onChange={handleChange}
            >
              <option value="">Select your state</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label" htmlFor="social_category">
              Social Category
            </label>
            <select
              id="social_category"
              name="social_category"
              required
              className="input-field"
              value={form.social_category}
              onChange={handleChange}
            >
              {SOCIAL_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="label" htmlFor="occupation">
            Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            required
            className="input-field"
            value={form.occupation}
            onChange={handleChange}
          >
            <option value="">Select your occupation</option>
            {OCCUPATIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="education">
            Highest education level
          </label>
          <select
            id="education"
            name="education"
            required
            className="input-field"
            value={form.education}
            onChange={handleChange}
          >
            <option value="">Select your education level</option>
            {EDUCATION_LEVELS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={saving} className="btn-primary w-full">
          {saving ? 'Saving...' : 'Save & View Recommendations'}
        </button>
      </form>
    </div>
  );
}
