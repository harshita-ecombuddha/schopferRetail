import { ChevronRight} from 'lucide-react';

export default function ContactForm() {
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-16 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24 lg:pt-20 lg:pb-14 w-full mx-auto bg-gray-50">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start text-left max-w-2xl mb-8 sm:mb-12 mt-8 sm:mt-12 lg:ml-10 lg:mb-0 px-4 sm:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
                     <span>Let's  </span> 
                     <span className="bg-lime-400 text-black px-2 rounded-md">Transform</span>{" "}
                    <br className="hidden sm:block"></br>Your E-commerce Performance
                </h1>

                <p className="text-base sm:text-lg md:text-xl mb-6">
                Contact Schopfer Retail for professional e-commerce<br className="hidden sm:block"></br>content that drives results
                </p>

                {/* <div className="flex flex-col sm:flex-row  gap-4 w-full sm:w-auto">
                    <button className="btn btnPrimary">
                    Contact Us <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div> */}
            </div> 
                
            {/* Right Content */}
            <div className="flex-1 flex justify-center items-center w-full">
                <div className="p-2 lg:ml-10 mx-w-md rounded-lg w-full max-w-2xl">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-xl p-4 sm:p-6 lg:p-8 shadow-[0_0_30px_rgba(0,0,0,0.05)]  bg-white">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Name*</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" placeholder="" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Company Name*</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                            <input type="email" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                            <input type="tel" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Services Interested In</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Project Time</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-600 mb-2">How did you hear about us</label>
                            <input type="text" className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-600 mb-2">Additional Details*</label>
                            <textarea className="w-full border-b border-gray-300 focus:outline-none py-2 text-base" rows="4" />
                        </div>
                        <div className="md:col-span-2 flex flex-col items-start">
                            <button type="submit" className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-lime-500 transition w-full sm:w-auto">
                                Submit
                            </button>
                            <p className="text-sm text-gray-500 mt-3 text-center sm:text-left">
                                Send us a message about your details. Let us reach out to you.<br className="hidden sm:block"/>
                                We typically respond to all inquiries within 24 hours or less.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};