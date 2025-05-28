import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { Calendar, MapPin, Users, Filter, Search } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'community' | 'awareness';
  description: string;
  image: string;
  capacity: number;
  registeredCount: number;
}

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const events: Event[] = [
    {
      id: "1",
      title: "Digital Literacy Workshop",
      date: "2024-04-15",
      time: "10:00 AM - 2:00 PM",
      location: "NEIEA Learning Center, Delhi",
      type: "workshop",
      description: "Learn essential computer skills including MS Office and internet basics.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: 30,
      registeredCount: 25
    },
    {
      id: "2",
      title: "Community Education Fair",
      date: "2024-04-20",
      time: "9:00 AM - 5:00 PM",
      location: "Central Park, Mumbai",
      type: "community",
      description: "Annual education fair showcasing opportunities and programs for underprivileged students.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: 200,
      registeredCount: 150
    },
    {
      id: "3",
      title: "Girls Education Awareness Drive",
      date: "2024-04-25",
      time: "11:00 AM - 3:00 PM",
      location: "Community Hall, Jaipur",
      type: "awareness",
      description: "Raising awareness about the importance of girls' education in rural communities.",
      image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      capacity: 100,
      registeredCount: 80
    }
  ];

  const eventTypes = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'community', name: 'Community Events' },
    { id: 'awareness', name: 'Awareness Programs' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Events Calendar" 
        subtitle="Join us for workshops, community events, and awareness programs"
        backgroundImage="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="text-neutral-400 w-5 h-5" />
                {eventTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedType === type.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-neutral-600 hover:bg-primary-50'
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <AnimatedSection
                key={event.id}
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'workshop' ? 'bg-primary-100 text-primary-700' :
                      event.type === 'community' ? 'bg-secondary-100 text-secondary-700' :
                      'bg-accent-100 text-accent-700'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-neutral-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-neutral-600">
                      <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Users className="w-5 h-5 mr-2 text-primary-500" />
                      <span>{event.registeredCount} / {event.capacity} registered</span>
                    </div>
                  </div>

                  <button 
                    className={`w-full btn ${
                      event.registeredCount >= event.capacity
                        ? 'bg-neutral-100 text-neutral-500 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                    disabled={event.registeredCount >= event.capacity}
                  >
                    {event.registeredCount >= event.capacity ? 'Event Full' : 'Register Now'}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Events;