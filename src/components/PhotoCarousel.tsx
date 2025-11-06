import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 px-4 relative z-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <div
                className={`glass-card rounded-lg overflow-hidden transition-all duration-500 ${
                  current === index
                    ? "scale-110 border-primary shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                    : "scale-90 opacity-60"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="glass-card text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="glass-card text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </section>
  );
};

export default PhotoCarousel;
