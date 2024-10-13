import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from "./form-component/contact-form";
import { BsChatDots } from 'react-icons/bs';

export const metadata = {
  title: "Homepage",
  description: ""


}

export default function Home() {

  const testimonials = [
    {
      id: 1,
      text: "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
      name: "Devon Lane",
      title: "President of Sales",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
    },
    {
      id: 2,
      text: "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
      name: "Ronald Richards",
      title: "Marketing Coordinator",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
    },
    {
      id: 3,
      text: "“This is a top quality product. No need to think twice before making it live on web.”",
      name: "Jane Cooper",
      title: "Dog Trainer",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
    },
    {
      id: 4,
      text: "“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.”",
      name: "Theresa Webb",
      title: "Web Designer",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg"
    },
    {
      id: 5,
      text: "“My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
      name: "Darlene Robertson",
      title: "Medical Assistant",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg"
    },
    {
      id: 6,
      text: "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”",
      name: "Floyd Miles",
      title: "Nursing Assistant",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg"
    }
  ];

  return (
    <main className="" id="home">
      <section className="bg-primary/40 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <Image
                className="object-contain"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt="Curved lines"
                width={192}
                height={192}
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                Get it done.<br />
                Fast, Easy.
              </h1>
              <p className="mt-8 text-xl text-black">
                We help you to make your remote work life easier. Build a distraction-free working experience.
              </p>
            </div>

          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <Image
                className="object-cover"
                src="https://images.unsplash.com/photo-1659005766979-45ab682d1d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Man working on laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                
                <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their desk via PostCra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24" id="about">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              About us
            </h2>
            <p className="mt-6 text-lg text-gray-900">
              At Valarpirai Electronics, we are passionate about bringing cutting-edge technology to your doorstep. As a trusted provider in the electronics market, our mission is to offer quality products and expert advice to help you stay ahead in the digital world
            </p>
            <Link href="#contact" title="Contact our support">
              <div className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md hover:bg-primary focus:bg-primary">
                <BsChatDots className="w-5 h-5 mr-2" />
                Contact
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto 2xl:px-12">
          <Image
            className="w-full mt-6"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
            alt="Group of people"
            width={1440} // Adjust width based on your requirement
            height={960} // Adjust height based on your requirement
            layout="responsive"
          />
        </div>
      </section>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24" id="testimonial">
        <div className="px-4 brand-container sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center pb-5">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Testimonials</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col bg-white border border-gray-200 rounded-md">
                <div className="flex flex-col justify-between flex-1 p-8">
                  <div className="flex-1">
                    <blockquote>
                      <p className="text-lg text-gray-800">{testimonial.text}</p>
                    </blockquote>
                  </div>
                  <div className="mt-8">
                    <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                    <div className="flex items-center">
                      <Image
                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}  // Specify the width
                        height={40} // Specify the height
                      />                      <div className="ml-3">
                        <p className="text-base font-semibold text-gray-800 truncate">{testimonial.name}</p>
                        <p className="text-base text-gray-500 truncate">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 " id="contact">
        <div className="brand-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <FaPhoneAlt className="flex-shrink-0 w-10 h-10 mx-auto text-primary" />
                  <p className="mt-6 text-lg font-medium text-gray-900">+1-316-555-0116</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">+1-446-526-0117</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <FaEnvelope className="flex-shrink-0 w-10 h-10 mx-auto text-primary" />
                  <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <FaMapMarkerAlt className="flex-shrink-0 w-10 h-10 mx-auto text-primary" />
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">8502 Preston Rd. Ingle, Maine 98380, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900 pb-10">Send us a message</h3>
                <ContactForm />

              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}