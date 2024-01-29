import React, { useState } from 'react'

const RoadmapPhase = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Unicode characters for triangles
  const upTriangle = '\u25BC';
  const downTriangle = '\u25B2';

  return (
    <div className='roadmap-phase'>
      <h3 onClick={() => setIsOpen(!isOpen)}>
        {title} <span className="triangle">{isOpen ? upTriangle : downTriangle}</span>
      </h3>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


const Roadmap = () => {
  const phases = [
    {
      title: 'Phase 1: Launch & Community Building (Q1 2024)',
      items: [
        'BeardCoin token launch on major exchanges.',
        'Build a strong online community through social media and beard-centric forums.',
        'Develop partnerships with sustainable beard care brands.'
      ]
    },
    {
      title: 'Phase 2: BeardCare Line & Merch (Q2 2024)',
      items: [
        'Launch the BeardCoin line of sustainable beard care products.',
        'Introduce limited-edition BeardCoin merch, designed by the community.',
        'Host online beard grooming tutorials and contests.'
      ]
    },
    {
      title: 'Phase 3: BeardCoin Foundation & Philanthropy (Q3 2024)',
      items: [
        "Establish the BeardCoin Foundation to support men's health charities and environmental initiatives.",
        'Organize beard-themed fundraising events and donation drives.',
        'Partner with eco-friendly organizations to offset the carbon footprint of our products.'
      ]
    },
    {
      title: 'Phase 4: The Bearded Metaverse & Beyond (2025 onwards)',
      items: [
        'Explore the potential of the metaverse for virtual beard-grooming experiences and beard-centric social gatherings.',
        'Implement innovative use cases for BeardCoin within the beard care industry.',
        'Continue to grow and evolve with the ever-changing crypto landscape.'
      ]
    }
  ]

  return (
    <section className='roadmap'>
      <h2>BeardCoin Roadmap</h2>
      {phases.map((phase, index) => (
        <RoadmapPhase key={index} title={phase.title} items={phase.items} />
      ))}
    </section>
  )
}

export default Roadmap
