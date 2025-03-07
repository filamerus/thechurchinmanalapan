import React, { useState } from 'react';
import { Menu, ChevronDown, Phone, MapPin, Mail } from 'lucide-react';

function App() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1920",
      title: "Sunday Morning Service",
      description: "Join us every Sunday at 10:00 AM for worship and fellowship"
    },
    {
      image: "https://images.unsplash.com/photo-1445059734162-ce09dd308c71?auto=format&fit=crop&q=80&w=1920",
      title: "Bible Study Groups",
      description: "Various study groups throughout the week"
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1920",
      title: "Youth Ministry",
      description: "Engaging activities for our young believers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm flex gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <Phone size={16} />
                (732) 555-0123
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                123 Main Street, Manalapan, NJ 07726
              </span>
            </div>
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-gray-900">Members Login</button>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">The Church in Manalapan</h1>
            <p className="text-xl text-gray-600 italic">"Christ is our life; the church is Christ our living"</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <ul className="flex space-x-6 py-4">
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="group relative">
                  <span className="flex items-center gap-1 hover:text-gray-300 cursor-pointer">
                    Visitors <ChevronDown size={16} />
                  </span>
                  <ul className="hidden group-hover:block absolute bg-gray-800 mt-2 py-2 w-48 rounded-md shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-700">New Here?</li>
                    <li className="px-4 py-2 hover:bg-gray-700">What We Believe</li>
                    <li className="px-4 py-2 hover:bg-gray-700">Service Times</li>
                  </ul>
                </li>
                <li className="group relative">
                  <span className="flex items-center gap-1 hover:text-gray-300 cursor-pointer">
                    Our Community <ChevronDown size={16} />
                  </span>
                  <ul className="hidden group-hover:block absolute bg-gray-800 mt-2 py-2 w-48 rounded-md shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-700">Ministries</li>
                    <li className="px-4 py-2 hover:bg-gray-700">Small Groups</li>
                    <li className="px-4 py-2 hover:bg-gray-700">Youth</li>
                  </ul>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">Events & Schedules</li>
                <li className="hover:text-gray-300 cursor-pointer">Members</li>
                <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                <li className="hover:text-gray-300 cursor-pointer">Location</li>
              </ul>
              <button className="lg:hidden">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Accordion Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex overflow-hidden h-[500px] rounded-lg shadow-xl">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer
                ${activeAccordion === index ? 'flex-grow' : 'flex-grow-0'}`}
              onClick={() => setActiveAccordion(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className={`transition-opacity duration-300 ${activeAccordion === index ? 'opacity-100' : 'opacity-0'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">W E L C O M E</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            We warmly welcome all brothers and sisters in Christ, as well as guests and visitors of all backgrounds. We encourage you to visit us and feel free to get in touch.

The church in Manalapan, New Jersey warmly welcomes you. We are believers in the Lord Jesus Christ who have personally received Him as our Savior. He is the most excellent and enjoyable Person. We love Him and endeavor to give Him the first place in all things. We rejoice to be cleansed by the blood of Jesus, God’s Son, born again of the Father’s divine life, and filled with the Holy Spirit.

We highly treasure the Holy Bible as God’s revelation of Himself and of His eternal purpose. We hold the common faith which is revealed in the Bible and is common to all genuine believers.

As is true of all believers in Christ, we are members of His one Body, the church. In order to practice the oneness of the Body with all the Christians in New Jersey, we meet as the church in Manalapan. We are in fellowship with over 2,000 local churches worldwide to express the one Body of Christ.
          </p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Latest News & Updates</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Weekly Bible Study Update</h4>
                  <p className="text-gray-600">Join us this Wednesday for an in-depth study of Scripture...</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Community Outreach</h4>
                  <p className="text-gray-600">Monthly food drive and community service opportunity...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Worship Services</h3>
              <p className="text-gray-600">Join us for Sunday worship at 10:00 AM. Experience uplifting praise and worship...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Small Groups</h3>
              <p className="text-gray-600">Connect with others in our various small groups meeting throughout the week...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Youth Ministry</h3>
              <p className="text-gray-600">Our youth program provides a safe and fun environment for spiritual growth...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            This page and all contents are Copyright © 2025 The Church in Manalapan (unless otherwise indicated). All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
