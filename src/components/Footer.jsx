import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className=" bg-transparent">
        <div className="container px-6 py-8 mx-auto">
            <div className="flex gap-16 justify-center mb-0">

                <div className="group relative flex flex-row">
                    <button onClick={() => window.open("https://github.com/sanjithrk06", "_blank")}>
                    <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="stroke-[#c5c4c4] w-6 hover:scale-125 duration-200 hover:stroke-[#fb442ce2]" width="20" height="20" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </button>
                    <pre className=' dxs:hidden sm:inline py-5 px-4 font-sans text-[#c5c4c4]'>Github</pre>
                </div>


                <div className="group relative flex flex-row">
                    <button onClick={() => window.open("https://linkedin.com/in/sanjithrk06", "_blank")}>
                    <svg  stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-[#c5c4c4] w-6 hover:scale-125 duration-200 hover:stroke-[#fb442ce2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </button>
                    <pre className=' dxs:hidden sm:inline  py-5 px-4 font-sans text-[#c5c4c4]'>Linkedin</pre>
                </div>

                <div className="group relative flex flex-row">
                    <button onClick={() => window.open("https://x.com/sanjithrk06", "_blank")}>
                        <svg  stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className=" stroke-[#c5c4c4] w-6 hover:scale-125 duration-200 hover:stroke-[#fb442ce2]" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                    <pre className=' dxs:hidden sm:inline  py-5 px-4 font-sans text-[#c5c4c4]'>Twitter</pre>
                </div>

            </div>

            <div className="flex flex-col items-center">

                <div class="w-20 h-[2px] bg-gray-300 my-5"></div>

                <div className="flex dxs:flex-col sm:flex-row justify-center items-center gap-5">
                    <p className="text-sm text-[#c5c4c4] ">
                    © 2024 Sanjith
                    </p>
                </div>

            </div>
        </div>
    </footer> 
    </>
  );
};

export default Footer
