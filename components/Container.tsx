import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx('max-w-screen mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};

export default Container;
