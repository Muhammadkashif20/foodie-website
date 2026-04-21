import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { Carousel } from "../../Components/application/carousel/carousel-base";

 const BannerCarousel = () => {
    return (
        <Carousel.Root className="relative aspect-[1.6] max-w-160">
            <Carousel.PrevTrigger className="absolute top-1/2 left-5 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <ChevronLeft className="size-6" />
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger className="absolute top-1/2 right-5 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <ChevronRight className="size-6" />
            </Carousel.NextTrigger>

            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
                <CarouselIndicator framed size="lg" />
            </div>

            <Carousel.Content className="gap-2">
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img alt="Image by Unsplash" src="/src/assets/img/banner1.jpg" className="size-full object-cover" />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="/src/assets/img/banner2.jpg"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
                <Carousel.Item className="overflow-hidden rounded-xl">
                    <img
                        alt="Image by Unsplash"
                        src="src/assets/img/banner3.jpg"
                        className="size-full object-cover"
                    />
                </Carousel.Item>
            </Carousel.Content>
        </Carousel.Root>
    );
};
export default BannerCarousel;