import Image from 'next/image';
import { CustomButtonProps } from '@/types/CustomButtonProps';
 
const CustomButton = ({ containerStyles, icon, title }: CustomButtonProps) => {
  return (
    <button className={`${containerStyles}`}>
      <Image src={`./icons/${icon}.svg`} alt={title} width={20} height={20} />
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
