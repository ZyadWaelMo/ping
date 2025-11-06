import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="py-20 px-4 relative z-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            >
              <div
                className={`glass-card rounded-lg overflow-hidden transition-all duration-500 ${
                  current === index
                    ? "scale-105 md:scale-110 border-primary shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                    : "scale-90 opacity-60"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="glass-card text-primary border-primary hover:bg-primary hover:text-primary-foreground left-2 md:-left-12" />
        <CarouselNext className="glass-card text-primary border-primary hover:bg-primary hover:text-primary-foreground right-2 md:-right-12" />
      </Carousel>
    </section>
  );
};

export default PhotoCarousel;
