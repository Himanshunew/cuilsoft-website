import { FaHandPointRight } from "react-icons/fa";

const TrainingBox = () => {
  return (
    <section className="py-8 md:pb-36 md:bg-white bg-[#f5f5f5]">
      <div className="container">
        <div className=" md:shadow-[0_0px_67px_-21px_#e3dcdc] lg:p-10 p-5 pt-5">
          <div className="md:grid md:grid-cols-2">
            <div>
              <div className="mb-9">
                <h3 className="text-xl font-bold my-5">Basic Information:</h3>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    <b className="flex items-center">Who Can Attend:</b> Any one
                    interested in learning web development
                  </p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    <b className="flex items-center">Languages :</b>
                    English, Hindi
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold my-5">
                  What you’ll be trained in:
                </h3>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>You will build web development projects.</p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>You will learn the latest technologies</p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    After the training you will be able to build ANY website you
                    want.
                  </p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>Learn professional developer best practices.</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-bold my-5">
                  Sign up today, and look forward to:
                </h3>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>A fun way of learning complex things</p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>Code Challenges and Coding Exercises</p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>Beautiful Real-World Projects</p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>Quizzes & Practice Tests</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold my-5">
                  Contact below for more details:
                </h3>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    <b>Cuilsoft Pvt. Ltd.</b>
                  </p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    <b>Email : </b>
                    contact@cuilsoft.com
                  </p>
                </div>
                <div className="flex my-2">
                  <div>
                    <FaHandPointRight
                      color="#fba42b"
                      size={25}
                      className="mr-2"
                    />
                  </div>
                  <p>
                    <b>Phone No.: </b> +91-890-100-1970 / +91-947-843-5545
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <marquee width="100%" direction="left">
              <p className="text-secondary font-medium text-xl">
              By the end of this training program, you will have the fluency in programming needed to create any website you can imagine.
              </p>
            </marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBox;
