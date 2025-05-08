import React from 'react';

const CourseSection = ({ title, description, courses, filterText = '' }) => {
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-4">
        {filteredCourses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
            <p className="text-gray-600">{course.source}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Acessar curso
            </a>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-gray-500 italic">Nenhum curso encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
