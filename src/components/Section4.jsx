function Section4(){
    const images = [
    "/f1-img.jpg",
    "/slow-img.jpeg",
    "/thestudio.jpeg",
    "/foundation.jpeg",
    "/f1movie.jpeg",
    "/slowhorse.jpeg",
    
  ];
    return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide p-10 ">
      <div className="flex space-x-4 px-4 py-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`iPhone ${index + 1}`}
            className="w-[100%] h-full rounded-xl object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

 
export default Section4;