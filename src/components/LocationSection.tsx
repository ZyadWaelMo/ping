import { MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";
import place from "@/assets/place.jpg";

const LocationSection = () => {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-gaming text-glow-white text-center mb-12">
          Find Us
        </h2>
        
        <div className="mb-8">
          <a
            href="https://maps.app.goo.gl/MPeLSHDo7AMAqpWLA"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-lg overflow-hidden hover:glass-card-red transition-all duration-300 group block relative"
          >
            <img
              src={place}
              alt="PING Gaming Center Location"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
              <MapPin className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
              <p className="text-xs md:text-sm font-gaming text-white mt-4">
                Click to Open Location
              </p>
            </div>
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href="https://chat.whatsapp.com/GGtfcPYlFCsCCGRTdrJz1q?mode=ems_copy_t"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-lg hover:glass-card-red transition-all duration-300 group"
          >
            <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
          </a>
          
          <a
            href="https://web.facebook.com/profile.php?id=100093565834598&ref=_xav_ig_profile_page_web"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-lg hover:glass-card-red transition-all duration-300 group"
          >
            <Facebook className="w-8 h-8 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
          </a>
          
          <a
            href="https://www.instagram.com/pinggamingg/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-lg hover:glass-card-red transition-all duration-300 group"
          >
            <Instagram className="w-8 h-8 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
