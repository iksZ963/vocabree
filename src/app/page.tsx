 import Head from 'next/head';
   import React from 'react';

   const Home: React.FC = () => {
     return (
       <div>
         <Head>
           <title>Vocabree - Expand Your Vocabulary</title>
           <meta name="description" content="Vocabree - Enrich your English vocabulary with a new word each day!" />
           <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="flex flex-col items-center justify-center min-h-screen p-4">
           <h1 className="text-4xl font-bold">Welcome to Vocabree!</h1>
           <p className="mt-4 text-lg">Get a new word delivered to your WhatsApp daily. Expand your vocabulary effortlessly.</p>

           <h2 className="mt-8 text-2xl">Subscribe Now to Get Started</h2>
           <p className="mt-2">Sign up to receive daily vocabulary words directly to your phone!</p>

           <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Join Our WhatsApp List</button>
         </main>
       </div>
     );
   };

   export default Home;
