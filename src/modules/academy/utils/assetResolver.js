import hero from "../../../assets/images/hero.png";
import academy from "../../../assets/images/academy_pht.png";
import electrical from "../../../assets/images/automotive-electrical-systems.jpg";
import diagnostics from "../../../assets/images/diagnostics-programming.jpg";
import engine from "../../../assets/images/engine-transmission-control.jpg";
import workshop from "../../../assets/images/workshop_pht.png";
import efi from "../../../assets/images/EFI.png";


const images = {
  "hero.png": hero,
  "academy_pht.png": academy,
  "automotive-electrical-systems.jpg": electrical,
  "diagnostics-programming.jpg": diagnostics,
  "engine-transmission-control.jpg": engine,
  "workshop_pht.png": workshop,
  "EFI.png": efi
};


export function resolveCourseImage(image){

  if(!image){
    return hero;
  }

  if(
    image.startsWith("http://") ||
    image.startsWith("https://")
  ){
    return image;
  }

  const file = image.split("/").pop();

  return images[file] || hero;
}
