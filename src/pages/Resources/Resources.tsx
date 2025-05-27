import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Filter, Search, BookOpen, FileSpreadsheet, FileImage } from 'lucide-react';
import PageHeader from '../../components/UI/PageHeader';
import AnimatedSection from '../../components/UI/AnimatedSection';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'ppt' | 'image';
  category: string;
  downloadUrl: string;
  size: string;
  uploadDate: string;
}

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources: Resource[] = [
    {
      id: "1",
      title: "Teaching Methodology Guide",
      description: "Comprehensive guide for educators on modern teaching methods and classroom management.",
      type: "pdf",
      category: "teaching",
      downloadUrl: "#",
      size: "2.5 MB",
      uploadDate: "2024-03-15"
    },
    {
      id: "2",
      title: "Digital Literacy Curriculum",
      description: "Detailed curriculum for basic computer skills and internet usage.",
      type: "doc",
      category: "curriculum",
      downloadUrl: "#",
      size: "1.8 MB",
      uploadDate: "2024-03-10"
    },
    {
      id: "3",
      title: "Annual Impact Report 2023",
      description: "Detailed report on NEIEA's activities and impact during 2023.",
      type: "pdf",
      category: "reports",
      downloadUrl: "#",
      size: "5.2 MB",
      uploadDate: "2024-02-28"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'teaching', name: 'Teaching Materials' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'reports', name: 'Reports' }
  ];

  const getIconByType = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-primary-500" />;
      case 'doc':
        return <FileSpreadsheet className="w-8 h-8 text-primary-500" />;
      case 'ppt':
        return <BookOpen className="w-8 h-8 text-primary-500" />;
      case 'image':
        return <FileImage className="w-8 h-8 text-primary-500" />;
      default:
        return <FileText className="w-8 h-8 text-primary-500" />;
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Resources" 
        subtitle="Access teaching materials, curricula, and reports to support your educational journey"
        backgroundImage="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="text-neutral-400 w-5 h-5" />
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-neutral-600 hover:bg-primary-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <AnimatedSection
                key={resource.id}
                delay={index * 0.1}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {getIconByType(resource.type)}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-neutral-600 text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center text-sm text-neutral-500 mb-4">
                        <span className="mr-4">{resource.size}</span>
                        <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                      </div>
                      <a 
                        href={resource.downloadUrl}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Resources;