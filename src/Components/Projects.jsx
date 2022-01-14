import { React, useContext } from 'react';
import { Context } from './ProjectData';

export default function ProjectPage() {
  const context = useContext(Context);
  // function debug2() {
  //   console.log(context);
  // }
  let UniData = context.UniData; // eslint-disable-line 
  UniData = UniData.map((uniproject) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg z-2 sticky">
      <img className="w-full" src={uniproject.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{uniproject.name}</div>
        <p className="text-gray-700 text-base">
          {uniproject.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={uniproject.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  ));
  let PersonalData = context.PersonalData; // eslint-disable-line
  PersonalData = PersonalData.map((project) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg z-10">
      <img className="w-full" src={project.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={project.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col items-stretch">
      <p className="object-center lg:text-9xl text-5xl text-base p-3 font-mono hover:underline">University Projects</p>
      <div className="flex flex-col lg:flex-row gap-20 items-center lg:max-w-full lg:p-60 text-white">
        {UniData}
      </div>
      <p className="object-center lg:text-9xl text-5xl text-base p-3 font-mono hover:underline">Personal Projects</p>
      <div className="flex flex-col lg:flex-row gap-20 items-center lg:max-w-full lg:p-60 text-white">
        {PersonalData}
      </div>
    </div>
  );
}
