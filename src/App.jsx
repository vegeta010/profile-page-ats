import React, { useState } from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CalendarIcon,
  AcademicCapIcon,
  UsersIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChartBarIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  PencilIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  UserIcon,
  ClockIcon,
  LanguageIcon,
  CalendarDaysIcon,
  MapPinIcon,
  Bars3CenterLeftIcon,
  H1Icon
} from '@heroicons/react/24/solid';

import { BellIcon } from '@heroicons/react/24/outline';

function App() {
  const [activeTab, setActiveTab] = useState('profile-details');

  const navigationItems = [
    { name: 'Dashboard', icon: HomeIcon, active: false },
    { name: 'Posted Job', icon: BriefcaseIcon, active: false },
    { name: 'Candidate', icon: UserGroupIcon, active: false },
    { name: 'Application Received', icon: DocumentTextIcon, active: false },
    { name: 'Interview Schedule', icon: CalendarIcon, active: false },
    { name: 'Onboarding', icon: AcademicCapIcon, active: false },
    { name: 'Roles & Teams', icon: UsersIcon, active: false },
    { name: 'Career Website', icon: GlobeAltIcon, active: false },
    { name: 'Masters', icon: BookOpenIcon, active: false },
    { name: 'Report', icon: ChartBarIcon, active: false, hasDropdown: true },
    { name: 'Subscription', icon: CreditCardIcon, active: false },
  ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    };

  return (
    <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-67 bg-white min-h-screen border-r border-gray-200 mt-4 ml-4 mb-6 rounded-lg">
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img src={"./logo-ably.png"} alt="logo"  />
              {/* <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-bold text-green-600 text-lg">ABLY WORKS.COM</div>
                <div className="text-xs text-green-600 font-medium tracking-wider">TRANSFORMING STARTUPS</div>
              </div> */}
            </div>
          </div>
          <nav className="px-4 py-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <button className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-500 hover:bg-green-50 hover:text-green-500 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    {item.hasDropdown && <ChevronDownIcon className="h-4 w-4" />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 mx-6 mt-4 rounded-lg">
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-xs ">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    className="w-full pl-9 pr-3 py-1 text-sm bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg bg-green-50">
                  <Squares2X2Icon className="h-6 w-6 text-green-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg relative bg-green-50">
                  <BellIcon className="h-6 w-6 text-green-500 " />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
                </button>
                <button className="h-10 flex items-center font-medium space-x-1 px-2 py-2 bg-red-100 text-red-500 text-[13px] rounded-lg hover:bg-red-600">
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 px-6 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <div className="flex items-center space-x-1 text-md text-gray-600 font-medium">
              <HomeIcon className="h-6 w-6 text-green-500" />
              <span className="text-green-500">Dashboard</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-500">Profile</span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-25 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
              <div className="absolute left-4 bottom-0 translate-y-1/2 z-10">
                <div className="flex items-center">
                  {/* Company Logo */}
                  <div className="bg-white rounded-lg p-1 border border-gray-200">
                    <div className="text-blue-600 font-bold text-sm">
                      <div className="flex items-center">
                        <div>
                          <img src={"./tcs-logo.png"} alt="logo" className="h-18 w-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company Info moved below hero */}
                </div>
              </div>
            </div>

            {/* Company Info below hero */}
            <div className="bg-white text-black px-4 py-4 mt-10">
              <div className="flex items-center justify-between gap-3">
                <h className="text-xl font-medium">TATA Consultancy Services</h>
                <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">Active</span>
              </div>
              <p className="text-gray-500"><span className=' text-black font-medium'>Last Login:</span> 12 Jan 2024, 8:55 AM</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="grid grid-cols-2 s">
                <button
                  onClick={() => setActiveTab('profile-details')}
                  className={`w-full px-6 py-3 border-b-4 font-medium text-sm  text-gray-500 text-left  ${activeTab === 'profile-details'
                      ? 'border-green-500'
                      : 'border-transparent bg-gray-50'
                    }`}
                >
                  <span className="block">Profile Details</span>
                  <span className="block font-normal opacity-80 ">Your profile summary with key personal and contact information</span>
                </button>

                <button
                  onClick={() => setActiveTab('password-change')}
                  className={`w-full py-3 px-6 border-b-4 font-medium text-sm text-left text-gray-500  ${activeTab === 'password-change'
                      ? 'border-green-500'
                      : 'border-transparent bg-gray-50'
                    }`}
                >
                  <span className="block">Password Change</span>
                  <span className="block font-normal opacity-80">Update your password to keep your account secure.</span>
                </button>
              </div>

            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === 'profile-details' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Profile Details</h3>
                      <p className="text-gray-500">Your profile summary with key personal and contact information.</p>
                    </div>
                    <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-green-700">
                      <PencilIcon className="h-3 w-3" />
                      <span>Edit</span>
                    </button>
                  </div>

                  {/* Contact Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start space-x-2">
                      <div className=" py-1 rounded-lg">
                        <EnvelopeIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm text-sm font-medium text-gray-900">Email Address</h4>
                        <p className="text-gray-500 font-medium">tataconsult@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <PhoneIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Mobile Number</h4>
                        <p className="text-gray-500 font-medium">+91 98111 73829</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className="py-1 rounded-lg">
                        <GlobeAltIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Website</h4>
                        <p className="text-gray-500 font-medium">www.tataconsultancy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <LinkIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Career Page Link</h4>
                        <p className="text-gray-500 font-medium">tata-consultancy-services</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <UserIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Owner Name</h4>
                        <p className="text-gray-500 font-medium">Akash Kumar</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <EnvelopeIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Owner Email</h4>
                        <p className="text-gray-500 font-medium">akashkumar@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <ClockIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Default Timezone</h4>
                        <p className="text-gray-500 font-medium">UTC+05:30</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <LanguageIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Language</h4>
                        <p className="text-gray-500 font-medium">English</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <CalendarDaysIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Account Created</h4>
                        <p className="text-gray-500 font-medium">15 Dec 2023</p>
                      </div>
                    </div>

                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <MapPinIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Address</h4>
                        <p className="text-gray-500 font-medium">H-19 Sector-9 Noida Uttar Pradesh- 201309</p>
                      </div>
                    </div>
                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <Bars3CenterLeftIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Career Page Job Opening Heading</h4>
                        <p className="text-gray-500 font-medium">WE want peop;e to thrive. We believe you do your best work when you feel your best</p>
                      </div>
                    </div>
                    <div className="flex items-start  space-x-2">
                      <div className=" py-1 rounded-lg">
                        <H1Icon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Career Page Job Opening Text</h4>
                        <p className="text-gray-500 font-medium">Welcome!</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'password-change' && (
                // <div>
                //   <div className="mb-6">
                //     <h3 className="text-xl font-semibold text-gray-900 mb-2">Password Change</h3>
                //     <p className="text-gray-600">Update your password to keep your account secure.</p>
                //   </div>

                //   <div className="max-w-md space-y-4">
                //     <div>
                //       <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                //       <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                //     </div>
                //     <div>
                //       <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                //       <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                //     </div>
                //     <div>
                //       <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                //       <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                //     </div>
                //     <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                //       Update Password
                //     </button>
                //   </div>
                // </div>


                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Button */}
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200"
      >
        Change Password
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl font-bold w-6 h-6 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Current Password */}
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="******"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  New Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="******"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {/* Password Requirements */}
                <div className="mt-3 text-xs text-gray-500 space-y-1">
                  <div>• Use at least 8–12 characters (longer is better).</div>
                  <div>• Include uppercase and lowercase letters.</div>
                  <div>• Add numbers (0–9).</div>
                  <div>• Add symbols (! @ # $ % ^ & * ?).</div>
                  <div>• Avoid common words or sequences (e.g., password123, qwerty).</div>
                  <div>• Don't reuse your old passwords.</div>
                  <div>• Consider using a passphrase (e.g., SunsetRiver#92).</div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="******"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                onClick={() => {
                  console.log('Password update requested');
                  closeModal();
                }}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

                
              )}
            </div>
          </div>
          </main>
        </div>
    </div>
  );
}

export default App;