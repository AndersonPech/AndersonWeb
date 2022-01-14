import { createContext } from 'react';
import OpenGL from './Images/opengl3D.gif';
import Python from './Images/python.jpg';
import Shell from './Images/shell.png';
import OpenGl2D from './Images/opengl2D.gif';

const Data = {
  UniData: [
    {
      name: 'OpenGL 3D and Lighting Project',
      link: 'https://github.com/AndersonPech/OpenGL_Project',
      description: `
                    Using b-splines to create a 3D sequence
                    involving the use of objects and models.
                    Modified shading using lighting equations to implement
                    point lighting and directional lighting with reflections off
                    the models. Normal maps used to give off texture lighting.
                    Written in C++.
                    `,
      image: OpenGL,
    },
    {
      name: 'Shrug',
      description: `
                    Using shell scripting, write shell scripts to emulate git commands and behaviour.
                    Received distinction for the implementation.
                    `,
      link: 'https://github.com/AndersonPech/Shrug',
      image: Shell,

    },
    {
      name: 'OpenGL 2D',
      link: 'https://github.com/AndersonPech/OpenGL_2D',
      description: `
                    Utilised shaders and textures as well as user input to create
                    a 2D scene.
                   `,
      image: OpenGl2D,
    },
  ],
  PersonalData: [
    {
      name: 'Python Mail Merger with Attachments',
      link: 'https://github.com/AndersonPech/MailMergerWithAttachments',
      description: `
                    Python script to send merge emails with personalised attachments.
                    Data in the form of an excel file.
                    `,
      image: Python,
    },
  ],
};

const Context = createContext(0);
export {
  Context,
  Data,
};
