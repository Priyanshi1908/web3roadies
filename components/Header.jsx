import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-950 to-purple-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/grumpy.png" // Replace with your image path
            alt="Logo"
            width={40} 
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="ml-20 w-full">
          <h1 className="text-2xl font-semibold">Welcome Player</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
