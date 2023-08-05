import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import agetest from "../../public/agetest.png";
import kanban from "../../public/kanban.png";
import qr from "../../public/qr.png";
import rock from "../../public/rock.png";
import squid from "../../public/squid.png";
import videocall from "../../public/videocall.png";

export default function Home() {

  function scroll(targetid){
    const targetsection = document.getElementById(targetid);
    if(targetsection){
      targetsection.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <main className="md:px-20 lg:px-40 bg-gradient-to-b  from-black-500 to-teal-500">
      <section className=" min-h-screen">
        
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbyed</h1>
          <ul className="flex items-center">
            <li className="px-3">
              <button id="stack-button">Stack</button>
            </li>
            <li className="px-3">
              <button id="projects-button">Projects</button>
            </li>
            <li className="px-3">
              <button id="contact-button">Contact</button>
            </li>
            <li>
              <a
                className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/file/d/1Gjac3tMBpNXrl63WBzr85OPFQ8fioVNy/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Pranav Raj
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer</h3>
          <p className="text-md py-5 md:text-xl max-auto">
            Hi, I'm a Full Stack Developer and Graphic Designer based in
            Bangalore, India and currently working at{" "}
            <span className="text-teal-600">Betsol.</span>
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 ">
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/pranavvraj/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>

          <a
            className="cursor-pointer"
            href="https://www.github.com/pranavvraj/"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.instagram.com/pranavvxo/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
        </div>
      </section>
      
      <section>
        <div>
          <h3 className="text-3xl py-1" id="stack">Technology I use</h3>
        </div>
        <div className="lg:flex justify-between gap-8">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
              FRONTEND
            </h3>

            {/* <h4 className='py-4 text-teal-600'>Design tools I use</h4> */}
            <p className="py-1">HTML</p>
            <p className="py-1">CSS</p>
            <p className="py-1">Javascript</p>
            <p className="py-1">React</p>
            <p className="py-1">Bootstrap</p>
            <p className="py-1">NextJS</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
              BACKEND
            </h3>

            <p className="py-1">Python</p>
            <p className="py-1">Django</p>
            <p className="py-1">NodeJS</p>
            <p className="py-1">Express</p>
            <p className="py-1">MongoDb</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
              TOOLS & PLATFORMS
            </h3>

            <p className="py-1">Postman</p>
            <p className="py-1">Photoshop</p>
            <p className="py-1">Figma</p>
            <p className="py-1">Git</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1" id="projects">Projects</h3>
          <p>Some random stuff...</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <a className="cursor-pointer" href="" target="_blank ">
              <Image
                src={kanban}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <a
              className="cursor-pointer"
              href="https://github.com/pranavvraj/agetest"
              target="_blank "
            >
              <Image
                src={agetest}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <a
              className="cursor-pointer"
              href="https://github.com/pranavvraj/qrcodeapp-frontend"
              target="_blank "
            >
              <Image
                src={qr}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <a
              className="cursor-pointer"
              href="https://github.com/pranavvraj/mirror-video-call-app"
              target="_blank "
            >
              <Image
                src={videocall}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <a
              className="cursor-pointer"
              href="https://github.com/pranavvraj/squidgame"
              target="_blank "
            >
              <Image
                src={squid}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
          <div className="basis-1/3 flex-1">
            <a
              className="cursor-pointer"
              href="https://github.com/pranavvraj/rockpaperscissors-game"
              target="_blank "
            >
              <Image
                src={rock}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
  <div className="text-3xl py-1">Get in touch</div>
  <form action="https://formspree.io/f/xqkveooj" method="POST">
    <div className="flex flex-col gap-4 py-4">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border rounded-md py-2 px-4 bg-inherit"
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="border rounded-md py-2 px-4 bg-inherit"
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        className="border rounded-md py-2 px-4 bg-inherit"
        rows="4"
        required
      ></textarea>
    </div>
    <div className="flex justify-center py-5">
    <button
      type="submit"
      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
    >
      Send Message
    </button>
    </div>
  </form>
</section>
    </main>
  );
}
