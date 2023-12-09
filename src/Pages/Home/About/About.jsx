import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col sm:space-y-12 lg:flex-row">
         <div className='lg:w-1/2 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
         </div>
          <div className='sm:space-y-5 lg:w-1/2 space-y-6 '>
            <h3 className='text-3xl font-bold text-orange-500 '>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. .</p>
            <p className="py-6 ">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;