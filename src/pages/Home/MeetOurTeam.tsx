import React from 'react';
import { UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Ms Niloufer Baig',
    role: 'Director',
    bio: 'Oversees program strategies and ensures smooth operations with vision and integrity.',
  },
  {
    name: 'Syed Danish Ali',
    role: 'Supervisor',
    bio: 'Oversees program strategies and ensures smooth operations with vision and integrity.',
  },
  {
    name: 'Ms Taskeen Tarannum',
    role: 'Deputy Supervisor',
    bio: 'Assists with coordination and leadership of educational projects and teams.',
  },
];

const MeetOurTeam: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary-700 mb-4">Meet Our Team!</h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Passionate professionals committed to making education equitable, innovative, and accessible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <UserCircle className="w-16 h-16 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">{member.name}</h3>
            <p className="text-primary-600 text-sm font-medium mb-2">{member.role}</p>
            <p className="text-neutral-500 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/team"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          View All Members
        </Link>
      </div>
    </section>
  );
};

export default MeetOurTeam;
