import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77" />;
      default:
        return<Icon name="pencil" size={38} color="#38CC77"/>
  }
};

export default Icons;
