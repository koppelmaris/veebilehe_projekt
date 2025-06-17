import React from 'react';

function MainPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] container mx-auto px-4 py-8 text-white">
      <h2 
        className="text-7xl font-bold mb-4 mt-16"
        style={{ color: '#FF97C1' }}>
        CardNest
        </h2>
      <p className="text-4xl font-bold mb-14">Learning has never been easier!</p>
      <h3 className="text-1xl font-bold  mb-16" style={{ opacity: 0.6 }}>CardNest is a learning platform that helps students share their notes and study easily with custom made flascards.</h3>
      <div className="flex flex-row gap-8 mt-12 mb-10">
        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg w-96 h-60 flex flex-col items-center">
            <div className="flex flex-row items-center h-full">
                <img src="/prepare.png" alt="Prepare" className="h-20 w-20 mr-4 ml-4" />
                <h3 className="text-3xl font-bold text-white ml-8">Prepare for exams</h3>
            </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg w-96 h-60 flex flex-col items-center">
            <div className="flex flex-row items-center h-full">
                <img src="/customize.png" alt="Prepare" className="h-16 w-16 mr-4 ml-4" />
                <h3 className="text-3xl font-bold text-white ml-8">Customize flashcards</h3>
            </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg w-96 h-60 flex flex-col items-center">
            <div className="flex flex-row items-center h-full">
                <img src="/share.png" alt="Prepare" className="h-20 w-20 mr-2 ml-4" />
                <h3 className="text-3xl font-bold text-white ml-8">Share with community</h3>
            </div>
        </div>
        </div>
        <h4 
        className="text-2xl font-bold mt-16 mb-4 text-white"
        style={{ color: '#FF97C1', textShadow: '2px 2px 8px #00000055' , opacity: 0.8 }}>
        Login to make cutomized flashcards!</h4>
    </main>
  );
}

export default MainPage;