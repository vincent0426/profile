const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
      <div className="flex justify-between py-4 lg:py-8">
        <p className="text-xl font-bold">
          Vincent Hsieh
        </p>
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;