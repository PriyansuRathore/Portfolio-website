import React from 'react';
import { FaTrophy, FaCode, FaFileAlt } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaFileAlt className="text-4xl text-purple-500" />,
      title: "Published Research Paper",
      subtitle: "Dynamic Diet Recommendations with Real-Time Data for Personalized Nutrition",
      description: "Research presents a dynamic diet recommendation system using Multi-Layer Perceptron (MLP) neural network to analyze user preferences, health conditions, and food consumption, delivering tailored recommendations through continuous feedback.",
      link: "https://drive.google.com/file/d/1PqxCL5qvPMtdhMQun7Rx8eiHRTKFfB5o/view?usp=sharing",
      linkText: "View Research Paper",
      highlight: "Published Research"
    },
    {
      id: 2,
      icon: <FaCode className="text-4xl text-green-500" />,
      title: "LeetCode Achievement",
      subtitle: "500+ Problems Solved • 1699 Rating • 360-Day Streak",
      description: "Consistently solved algorithmic problems on LeetCode, maintaining a strong problem-solving streak and achieving a competitive rating through dedicated practice and continuous learning.",
      link: "https://leetcode.com/u/Priyansu_Rathore7576/",
      linkText: "View LeetCode Profile",
      highlight: "500+ Problems"
    },
    {
      id: 3,
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "Industry Hackathon Runner-up",
      subtitle: "Bennett University • Jan 2024",
      description: "Achieved runner-up position among 50+ teams in an industry hackathon, contributing to the development of NutriGuide AI, a health chatbot, by collaborating with team to design and implement innovative solutions.",
      link: "#",
      linkText: "Learn More",
      highlight: "Runner-up"
    }
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlighting my research contributions, competitive programming achievements, and hackathon success
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-[#0d081f] border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {achievement.icon}
                <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                  {achievement.highlight}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {achievement.title}
            </h3>

            <h4 className="text-sm font-semibold text-purple-300 mb-3">
              {achievement.subtitle}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {achievement.description}
            </p>

            {achievement.link !== "#" && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-200"
              >
                {achievement.linkText}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;