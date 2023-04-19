import * as S from "./style";

interface PropsType {
  src: string;
  size?: number;
  onClick?: () => void;
}

const Icon = ({ src, size, onClick }: PropsType) => {
  return (
    <S.Icon
      src={src}
      style={{ width: size, height: size }}
      onClick={onClick}
      cursor={onClick ? true : false}
    />
  );
};

export default Icon;
