import Image from "next/image";
import ellipsis from "../../public/images/ellipsis.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="text-center py-8">
      <Image src={ellipsis} alt="Icon of ellipsis" width={32} height={32} className="" />
    </footer>
  );
}
