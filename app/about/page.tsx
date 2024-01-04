import React from 'react';

function Page() {
 return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 px-32">
      <div className="min-h-screen  flex items-center justify-center">
      <div className=" border border-gray-300 text-white rounded p-5">
        <h2 className="text-2xl font-bold mb-5">About Me</h2>
        <p>Hi I am a Sophmore at Del Norte Highschool.</p>
        <p>At school, I am currently in 4 AP classes and am part of the Speech and Debate, Robotics, Stem Voultering, and Hackathon clubs.</p>
        <p></p>
        <div>
            <p>
             I am currently conducting research on single cell RNA sequencing by utilizing deep learning. During the summer I worked under a phd professor as a student researcher in a robotics and computer science lab at UC Irvine . I also different startups and business models as part of my non-stem research. In hopes to devlope my own startup when I am in highschool. 
            </p>
        </div>
        <h2 className='text-2xl font-bold mb-5 pt-5'>
            Current Projects:
        </h2>
        <ul className='list-none pl-5'>
            <li>
                College Oppurtunity Initative: 
            </li>
            <li>
                Evently: A Event market place using MongoDB, Nextjs, FramerMotion, Shadcn, and upload thing
            </li>
            <li>
                Mifi:  A AI music Buddy using, Pytorch, Spotify API(If I get approved), Next JS, React Native, Framer Motion
            </li>
        </ul>
      </div>
    </div>
      </div>
    </main>
 );
}

export default Page;