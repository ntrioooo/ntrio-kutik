import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import Layout from './layout/layout';
import peaceImage from '../../public/images/memoji/peace-bg.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="justify-center flex">
          <div className="bg-gray-300 rounded-full">
            <Image
              src={peaceImage}
              alt="Peace Memoji"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="mt-3 text-center">
          <div className="bg-black rounded-xl inline-block px-4 py-3">
            <h1 className="text-3xl font-bold text-white">ntriodev.</h1>
          </div>
          <p className="mt-2 text-lg">
            frontend developer, crafting seamless web experiences with code.
          </p>
        </div>
      </Layout>
    </>
  );
}
