import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, Users, MessageCircle, Ear, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';

const CommunicationGuide = () => {
  const [activeSection, setActiveSection] = useState('translate');
  const [completedTips, setCompletedTips] = useState(new Set());

  const toggleTip = (tipId) => {
    const newCompleted = new Set(completedTips);
    if (newCompleted.has(tipId)) {
      newCompleted.delete(tipId);
    } else {
      newCompleted.add(tipId);
    }
    setCompletedTips(newCompleted);
  };

  const sections = {
    translate: {
      title: "Translating Tech to Non-Tech",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    confidence: {
      title: "Building Confidence",
      icon: <Users className="w-5 h-5" />,
      color: "bg-green-500"
    },
    clarity: {
      title: "Clear Messaging",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "bg-purple-500"
    },
    listening: {
      title: "Active Listening",
      icon: <Ear className="w-5 h-5" />,
      color: "bg-orange-500"
    },
    difficult: {
      title: "Difficult Conversations",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "bg-red-500"
    }
  };

  const cyberAnalogies = [
    {
      concept: "Firewalls",
      analogy: "Security guards at a building entrance - they check everyone coming in and only let authorized people through",
      businessValue: "Prevents costly data breaches that could shut down operations"
    },
    {
      concept: "Encryption",
      analogy: "Like sending a letter in a locked box - only the person with the key can read it",
      businessValue: "Protects customer data and maintains trust"
    },
    {
      concept: "Multi-factor Authentication",
      analogy: "Like needing both your house key AND security code - double protection",
      businessValue: "Reduces risk of account takeovers by 99%"
    },
    {
      concept: "Vulnerability Assessment",
      analogy: "Like a home security inspection - finding weak spots before burglars do",
      businessValue: "Prevents expensive security incidents and downtime"
    },
    {
      concept: "Zero Trust",
      analogy: "Like a museum where every visitor needs ID checked at every room, not just entry",
      businessValue: "Limits damage if one part of the system is compromised"
    }
  ];

  const presentationTips = [
    {
      id: 'story',
      category: 'Structure',
      tip: "Start with a story or real scenario",
      example: "\"Last week, a company like yours lost $2M in 3 hours due to a cyberattack...\""
    },
    {
      id: 'rule3',
      category: 'Structure',
      tip: "Use the Rule of 3",
      example: "\"Today we'll cover 3 things: What threatens you, How to protect yourself, What it costs to ignore this\""
    },
    {
      id: 'visuals',
      category: 'Delivery',
      tip: "Replace jargon with visuals",
      example: "Show a simple diagram instead of explaining 'network architecture'"
    },
    {
      id: 'numbers',
      category: 'Content',
      tip: "Lead with business impact, not technical details",
      example: "\"This saves you 40 hours/month\" not \"This automates the SIEM correlation process\""
    },
    {
      id: 'questions',
      category: 'Engagement',
      tip: "Ask questions to check understanding",
      example: "\"Does this match what you're seeing in your business?\""
    },
    {
      id: 'pause',
      category: 'Delivery',
      tip: "Pause after key points",
      example: "State important fact → pause 3 seconds → continue"
    }
  ];

  const confidenceTips = [
    {
      id: 'prep',
      tip: "Know your first 30 seconds by heart",
      detail: "Memorize your opening so you start strong, then you can relax into the flow"
    },
    {
      id: 'audience',
      tip: "Focus on helping, not impressing",
      detail: "Shift mindset from 'they're judging me' to 'I'm here to solve their problems'"
    },
    {
      id: 'breathing',
      tip: "Use box breathing before speaking",
      detail: "4 counts in, hold 4, out 4, hold 4. Repeat 3 times to calm nerves"
    },
    {
      id: 'power',
      tip: "Strike a power pose for 2 minutes beforehand",
      detail: "Hands on hips, feet wide, chin up. Literally changes your hormone levels"
    }
  ];

  const clarityTips = [
    {
      id: 'headline',
      tip: "Lead with your headline",
      detail: "Say your main point first, then explain. 'We need to upgrade our security. Here's why...'"
    },
    {
      id: 'signpost',
      tip: "Use signpost phrases",
      detail: "'The key point is...', 'What this means is...', 'The bottom line...'"
    },
    {
      id: 'repeat',
      tip: "Repeat important points 3 ways",
      detail: "Say it, show it visually, then summarize it differently"
    },
    {
      id: 'check',
      tip: "Check for understanding regularly",
      detail: "'Before I continue, are there questions about this part?'"
    }
  ];

  const listeningTips = [
    {
      id: 'reflect',
      tip: "Reflect back what you heard",
      detail: "'So if I understand correctly, your main concern is...'"
    },
    {
      id: 'curious',
      tip: "Ask curious questions, not leading ones",
      detail: "'What's behind that concern?' vs 'Don't you think you should...'"
    },
    {
      id: 'silence',
      tip: "Get comfortable with silence",
      detail: "Count to 3 after they stop talking. Often they'll add the most important part."
    },
    {
      id: 'body',
      tip: "Match their communication style",
      detail: "If they're visual, use diagrams. If they're detail-oriented, have backup data ready."
    }
  ];

  const difficultTips = [
    {
      id: 'neutral',
      tip: "Stay curious, not defensive",
      detail: "'Help me understand your perspective' vs 'That's not how it works'"
    },
    {
      id: 'acknowledge',
      tip: "Acknowledge their concerns first",
      detail: "'I can see why you'd be worried about costs. Let me show you...'"
    },
    {
      id: 'reframe',
      tip: "Reframe problems as opportunities",
      detail: "'This challenge gives us a chance to build something even better'"
    },
    {
      id: 'common',
      tip: "Find common ground",
      detail: "'We both want your business to be secure and profitable. Let's figure out how...'"
    }
  ];

  const renderTipSection = (tips, sectionKey) => (
    <div className="space-y-3">
      {tips.map((tip) => (
        <div key={tip.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-start gap-3">
            <button
              onClick={() => toggleTip(tip.id)}
              className="mt-1"
            >
              {completedTips.has(tip.id) ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {tip.category && (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {tip.category}
                  </span>
                )}
                <h4 className="font-medium text-gray-900">{tip.tip}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">{tip.detail || tip.example}</p>
              {tip.example && tip.detail && (
                <p className="text-blue-600 text-sm italic">Example: {tip.example}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Cybersecurity Communication Guide
        </h1>
        <p className="text-gray-600">
          Master the art of explaining complex security concepts to any audience
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-4 bg-gray-50 rounded-lg">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === key
                ? `${section.color} text-white`
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {section.icon}
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {activeSection === 'translate' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-500" />
              Translating Tech to Business Language
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-blue-900">The Golden Rule</h3>
              </div>
              <p className="text-blue-800">
                Always start with business impact, then explain the technical solution. 
                Your audience cares about outcomes, not processes.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Cybersecurity Analogies That Work</h3>
            <div className="grid gap-4 mb-8">
              {cyberAnalogies.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{item.concept}</h4>
                  <p className="text-gray-600 mb-2">
                    <strong>Analogy:</strong> {item.analogy}
                  </p>
                  <p className="text-green-700">
                    <strong>Business Value:</strong> {item.businessValue}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Presentation Structure Tips</h3>
            {renderTipSection(presentationTips, 'presentation')}
          </div>
        </div>
      )}

      {activeSection === 'confidence' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-500" />
            Building Confidence
          </h2>
          {renderTipSection(confidenceTips, 'confidence')}
        </div>
      )}

      {activeSection === 'clarity' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-purple-500" />
            Clear Messaging
          </h2>
          {renderTipSection(clarityTips, 'clarity')}
        </div>
      )}

      {activeSection === 'listening' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Ear className="w-6 h-6 text-orange-500" />
            Active Listening
          </h2>
          {renderTipSection(listeningTips, 'listening')}
        </div>
      )}

      {activeSection === 'difficult' && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            Difficult Conversations
          </h2>
          {renderTipSection(difficultTips, 'difficult')}
        </div>
      )}

      {/* Progress Tracker */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Your Progress</h3>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedTips.size / 22) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {completedTips.size}/22 tips practiced
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunicationGuide;