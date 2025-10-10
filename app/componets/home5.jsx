import Image from "next/image";

const DownloadAppSection = () => (
  <section className="bg-yellow-50 py-20 px-4">
    <h2 className="text-4xl font-extrabold text-black text-center mb-2">
      Download App from
    </h2>
    <p className="text-lg text-gray-700 text-center mb-12">
      Download our mobail applications
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Phone mockups */}
      <div className="flex gap-8">
        <Image
  src="/images/first.png" // or your actual path
  alt="App Mockup 1"
  width={1030}
  height={470}
style={{
  maxWidth: "930px",
  maxHeight: "970px",
  top: "128px",
  position: "relative" // or "absolute" if you're positioning it
}}
/>

        <Image
          src="/images/second.png" // save your right phone mockup as public/phone2.jpg
          alt="App Mockup 2"
          width={280}
          height={270}
          style={{
  maxWidth: "1030px",
  maxHeight: "970px",
  
  right:"300px",
  position: "relative" // or "absolute" if you're positioning it
}}
        />
      </div>
      {/* Store buttons */}
      <div className="flex flex-col gap-6">
        <a href="https://play.google.com/store" target="_blank" rel="noopener">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            width={220}
            height={66}
            right={260}
            style={{
  maxWidth: "1030px",
  maxHeight: "970px",
  
  right:"200px",
  position: "relative" // or "absolute" if you're positioning it
}}
            className="object-contain"
            
          />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener">
          <Image
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            width={220}
            height={66}
            style={{
  maxWidth: "1030px",
  maxHeight: "970px",
  
  right:"200px",
  position: "relative" // or "absolute" if you're positioning it
}}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  </section>
);

export default DownloadAppSection;
